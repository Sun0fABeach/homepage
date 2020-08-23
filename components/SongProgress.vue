<template>
  <div @click="seek">
    <span :style="knobTransform" />
  </div>
</template>

<script>
export default {
  props: {
    percentage: {
      type: Number,
      default: 0,
    },
    songActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      offset: 0,
    }
  },
  computed: {
    knobTransform() {
      return { transform: `translate(${this.offset}px, -50%)` }
    },
  },
  watch: {
    percentage(val) {
      this.offset = (this.$el.clientWidth * val) / 100
    },
  },
  methods: {
    seek(event) {
      if (!this.songActive) {
        return
      }
      const offsetPx = event.clientX - this.$el.getBoundingClientRect().x
      this.$amplitude.setSongPlayedPercentage(
        (offsetPx * 100) / this.$el.clientWidth
      )
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 300px;
  height: 20px;
  border-width: 8px 0 8px;
  border-style: solid;
  border-color: transparent;
  background-clip: content-box;
  background-color: $color-primary;
  cursor: pointer;

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
</style>
