<template>
  <section class="page drums">
    <h1
      class="amplitude-play-pause"
      data-amplitude-playlist="coshima-hataera"
      data-amplitude-song-index="1"
    >
      <Icon name="play" /> PLAYLIST PLAY/PAUSE
    </h1>

    <div v-for="(playlist, key) of playlists" :key="playlist.title">
      <h2>{{ playlist.title }}</h2>
      <ol>
        <li
          v-for="(song, idx) of playlist.songs"
          :key="song.name"
          class="amplitude-play"
          :data-amplitude-song-index="idx"
          :data-amplitude-playlist="key"
        >
          {{ song.name }}
        </li>
      </ol>
    </div>
  </section>
</template>

<script>
import { omit, each } from 'lodash-es'
import playlists from '@/assets/audio'
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
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
