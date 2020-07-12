<template>
  <section class="page drums">
    <SongList :playlists="playlists" :playing-song-id="playingSongId" />
    <Player
      :song-data="activeSongData"
      :playlist-key="activePlaylistKey"
      :playing="!!playingSongId"
    />
  </section>
</template>

<script>
import { pick } from 'lodash-es'
import playlists from '@/assets/audio'
import SongList from '@/components/SongList'
import Player from '@/components/Player'

export default {
  components: {
    SongList,
    Player,
  },
  provide() {
    return {
      songId: this.songId,
    }
  },
  data() {
    return {
      playingSongId: null,
      activeSongData: null,
      activePlaylistKey: null,
    }
  },
  created() {
    this.playlists = playlists
  },
  mounted() {
    this.$amplitude.init({
      songs: [{ url: '' }], // dummy, so init works ...
      playlists,
      callbacks: {
        play: this.onPlay,
        pause: this.onPause,
        song_change: this.onSongChange,
      },
    })
  },
  destroyed() {
    this.$amplitude.pause()
  },
  methods: {
    songId(playlistKey, songIdx) {
      return `${playlistKey}${songIdx}`
    },
    onPause() {
      this.playingSongId = null
    },
    onPlay() {
      const playlist = this.activePlaylistData()
      this.playingSongId = this.songId(playlist.key, playlist.active_index)
    },
    onSongChange() {
      const playlist = this.activePlaylistData()
      const songData = this.$amplitude.getActiveSongMetadata()

      this.activePlaylistKey = playlist.key
      this.activeSongData = {
        ...pick(songData, ['artist', 'album', 'name']),
        isFirst: playlist.active_index === 0,
        isLast: playlist.active_index === playlist.songs.length - 1,
      }
    },
    activePlaylistData() {
      return {
        ...this.$amplitude.getActivePlaylistMetadata(),
        key: this.$amplitude.getActivePlaylist(),
      }
    },
  },
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
