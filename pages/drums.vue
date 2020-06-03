<template>
  <section class="page drums">
    <h1
      class="amplitude-play-pause"
      data-amplitude-playlist="coshima-hataera"
      data-amplitude-song-index="1"
    >
      PLAYLIST PLAY/PAUSE
    </h1>

    <div v-for="playlist in playlists" :key="playlist.title">
      <h2>{{ playlist.title }}</h2>
      <ol>
        <li v-for="song in playlist.songs" :key="song.name">
          {{ song.name }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { omit, each } from 'lodash-es'
import playlists from '@/assets/audio'

export default {
  data() {
    return {
      playlists,
    }
  },
  mounted() {
    this.$amplitude.init({})
    each(playlists, (playlist, key) => {
      this.$amplitude.addPlaylist(
        key,
        omit(playlist, ['songs']),
        playlist.songs
      )
    })
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
