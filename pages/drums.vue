<template>
  <section class="page drums">
    <div v-for="(playlist, key) of playlists" :key="playlist.title">
      <h2>{{ playlist.title }}</h2>
      <ol>
        <li
          v-for="(song, idx) of playlist.songs"
          :key="song.name"
          class="amplitude-play-pause"
          :data-amplitude-song-index="idx"
          :data-amplitude-playlist="key"
        >
          <Icon :name="playingSongId === songId(key, idx) ? 'pause' : 'play'" />
          {{ song.name }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import playlists from '@/assets/audio'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
  data() {
    return {
      playingSongId: null,
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
      const playlistKey = this.$amplitude.getActivePlaylist()
      const songIdx = this.$amplitude.getActivePlaylistMetadata().active_index
      this.playingSongId = this.songId(playlistKey, songIdx)
    },
  },
}
</script>

<style lang="scss" scoped></style>
