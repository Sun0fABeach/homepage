<template>
  <section class="page page--drums">
    <SongList :playlists="playlists" :playing-song-id="playingSongId" />
    <Player
      :song-data="activeSongData"
      :playlist-key="activePlaylistKey"
      :playing="!!playingSongId"
      :played-percentage="playedSongPercentage"
    />
  </section>
</template>

<script>
import { pick } from 'lodash-es'
import playlists from '@/assets/audio'

export default {
  provide() {
    return {
      songId: this.songId,
    }
  },
  data() {
    return {
      activePlaylistKey: null,
      activeSongData: null,
      playingSongId: null,
      playedSongSeconds: 0,
      playedSongPercentage: 0,
    }
  },
  created() {
    this.playlists = playlists
  },
  mounted() {
    this.$amplitude.init({
      playlists,
      callbacks: {
        play: this.onPlay,
        pause: this.onPause,
        song_change: this.onSongChange,
        timeupdate: this.onTimeUpdate,
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

      this.playedSongPercentage = 0
      this.playedSongSeconds = 0
    },
    onTimeUpdate() {
      this.playedSongPercentage = this.$amplitude.getSongPlayedPercentage()
      this.playedSongSeconds = this.$amplitude.getSongPlayedSeconds()
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
.page--drums {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
}
</style>
