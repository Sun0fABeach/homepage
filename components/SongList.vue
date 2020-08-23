<template>
  <div class="song-list">
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
          <Icon :name="playingSongId === songId(key, idx) ? 'pause' : 'play'" />
          {{ song.name }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    playlists: {
      type: Object,
      required: true,
    },
    playingSongId: {
      type: String,
      default: null,
    },
  },
  inject: ['songId'],
}
</script>

<style lang="scss" scoped>
.song-list {
  flex-grow: 1;

  > div {
    margin-bottom: 1rem;
  }

  h2,
  li {
    cursor: pointer;
  }
}
</style>
