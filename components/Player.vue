<template>
  <div class="container">
    <div class="song-info">
      <div>Artist: {{ songData ? songData.artist : '-' }}</div>
      <div>Album: {{ songData ? songData.album : '-' }}</div>
      <div>Song: {{ songData ? songData.name : '-' }}</div>
    </div>
    <Icon
      class="prev-btn amplitude-prev"
      :class="{ disabled: !songData || songData.isFirst }"
      :data-amplitude-playlist="playlistKey"
      name="prev"
    />
    <Icon
      class="play-pause-btn amplitude-play-pause"
      :class="{ disabled: !songData }"
      :data-amplitude-playlist="playlistKey"
      :name="songData && playing ? 'pause' : 'play'"
    />
    <Icon
      class="next-btn amplitude-next"
      :class="{ disabled: !songData || songData.isLast }"
      :data-amplitude-playlist="playlistKey"
      name="next"
    />
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
  props: {
    playlistKey: {
      type: String,
      default: null,
    },
    songData: {
      type: Object,
      default: null,
    },
    playing: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  flex-shrink: 0;
  text-align: center;

  .play-pause-btn,
  .prev-btn,
  .next-btn {
    font-size: 3rem;
    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
