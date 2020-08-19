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
    <div ref="songProgress" class="song-progress">
      <span ref="songProgressKnob" :style="progressKnobTransform" />
    </div>
    <div class="song-seconds">
      <span>{{ songElapsedTime }}</span> /
      <span>{{ songDuration }}</span>
    </div>
  </div>
</template>

<script>
import { padStart } from 'lodash-es'
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
    playedSeconds: {
      type: Number,
      default: 0,
    },
    playedPercentage: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      progressOffset: 0,
    }
  },
  computed: {
    progressKnobTransform() {
      return { transform: `translate(${this.progressOffset}px, -50%)` }
    },
    songDuration() {
      return this.secsToTimeDisplay(this.songData ? this.songData.duration : 0)
    },
    songElapsedTime() {
      return this.secsToTimeDisplay(this.playedSeconds)
    },
  },
  watch: {
    playedPercentage(val) {
      this.setProgress(val)
    },
  },
  mounted() {
    this.setProgress(0)
  },
  methods: {
    setProgress(percentage) {
      const progressBarWidth = this.$refs.songProgress.clientWidth
      this.progressOffset = (progressBarWidth * percentage) / 100
    },
    secsToTimeDisplay(totalSecs) {
      const floored = Math.floor(totalSecs)
      const mins = Math.floor(floored / 60)
      const secs = floored % 60
      return `${this.padZeroes(mins)}:${this.padZeroes(secs)}`
    },
    padZeroes(val) {
      return padStart(val, 2, '0')
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

  .song-progress {
    position: relative;
    width: 300px;
    height: 4px;
    margin-top: 0.5rem;
    background-color: $color-primary;

    > span {
      $knob-width: 14px;

      display: inline-block;
      position: absolute;
      top: 50%;
      left: -$knob-width / 2;
      width: $knob-width;
      height: $knob-width;
      border-radius: 50%;
      background-color: black;
    }
  }

  .song-seconds {
    margin-top: 0.75rem;
  }
}
</style>
