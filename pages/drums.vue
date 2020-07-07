<template>
  <section class="page drums">
    <div class="songs">
      <div v-for="(playlist, key) of playlists" :key="playlist.title">
        <h2
          class="amplitude-play"
          :data-amplitude-playlist="key"
          :data-amplitude-song-index="0"
        >
          {{ playlist.title }}
        </h2>
        <ol>
          <li
            v-for="(song, idx) of playlist.songs"
            :key="song.name"
            class="amplitude-play-pause"
            :data-amplitude-song-index="idx"
            :data-amplitude-playlist="key"
          >
            <Icon
              :name="playingSongId === songId(key, idx) ? 'pause' : 'play'"
            />
            {{ song.name }}
          </li>
        </ol>
      </div>
    </div>

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
import Icon from '@/components/Icon'
import Player from '@/components/Player'

export default {
  components: {
    Player,
    Icon,
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
  methods: {
    songId(playlistKey, songIdx) {
      return `${playlistKey}${songIdx}`
    },
    onPause() {
      this.playingSongId = null
    },
    onPlay() {
      const playlist = this.playlistData()
      this.playingSongId = this.songId(playlist.key, playlist.active_index)
    },
    onSongChange() {
      const playlist = this.playlistData()
      const songData = this.$amplitude.getActiveSongMetadata()

      this.activePlaylistKey = playlist.key
      this.activeSongData = {
        ...pick(songData, ['artist', 'album', 'name']),
        isFirst: playlist.active_index === 0,
        isLast: playlist.active_index === playlist.songs.length - 1,
      }
    },
    playlistData() {
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

  .songs {
    flex-grow: 1;

    > div {
      margin-bottom: 1rem;
    }
  }
}
</style>
