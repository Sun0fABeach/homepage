<template>
  <div class="container">
    <div class="song-info">
      <div>Artist: {{ song.artist }}</div>
      <div>Album: {{ song.album }}</div>
      <div>Song: {{ song.name }}</div>
    </div>

    <Icon
      class="prev-btn amplitude-prev"
      :class="{ disabled: song.unset || song.isFirst }"
      :data-amplitude-playlist="playlistKey"
      name="prev"
    />
    <Icon
      class="play-pause-btn amplitude-play-pause"
      :class="{ disabled: song.unset }"
      :data-amplitude-playlist="playlistKey"
      :name="playing ? 'pause' : 'play'"
    />
    <Icon
      class="next-btn amplitude-next"
      :class="{ disabled: song.unset || song.isLast }"
      :data-amplitude-playlist="playlistKey"
      name="next"
    />

    <SongProgress
      class="song-progress"
      :percentage="playedPercentage"
      :song-active="!!songData"
    />

    <div class="song-seconds">
      <span>{{ songElapsedTime }}</span> /
      <span>{{ songDuration }}</span>
    </div>
  </div>
</template>

<script>
import { padStart } from 'lodash-es'
import Icon from '@/components/Icon'
import SongProgress from '@/components/SongProgress'

export default {
  components: {
    Icon,
    SongProgress,
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
  computed: {
    song() {
      return (
        this.songData || {
          unset: true,
          artist: '-',
          album: '-',
          name: '-',
          isFirst: false,
          isLast: false,
          duration: 0,
        }
      )
    },
    songDuration() {
      return this.secsToTimeDisplay(this.song.duration)
    },
    songElapsedTime() {
      return this.secsToTimeDisplay(this.playedSeconds)
    },
  },
  methods: {
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
    margin-top: 0.5rem;
  }

  .song-seconds {
    margin-top: 0.75rem;
  }
}
</style>
