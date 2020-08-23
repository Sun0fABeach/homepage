<template>
  <div @mousedown.prevent="onMouseDown">
    <span :style="knobTransform" />
  </div>
</template>

<script>
import { clamp } from 'lodash-es'

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
      if (!this.mouseDown) {
        this.offset = (this.$el.clientWidth * val) / 100
      }
    },
  },
  methods: {
    onMouseDown(event) {
      if (!this.songActive) {
        return
      }
      this.mouseDown = true
      this.positionKnob(event.clientX)
      window.addEventListener('mousemove', this.onMouseMove)
      window.addEventListener('mouseup', this.onMouseUp, { once: true })
    },
    onMouseMove(event) {
      this.positionKnob(event.clientX)
    },
    onMouseUp(event) {
      this.mouseDown = false
      this.seek()
      window.removeEventListener('mousemove', this.onMouseMove)
    },
    positionKnob(mouseX) {
      const { left, right } = this.$el.getBoundingClientRect()
      const screenOffset = clamp(mouseX, left, right)
      this.offset = screenOffset - left
    },
    seek() {
      const percentage = (this.offset * 100) / this.$el.clientWidth
      /* percentage values of 0 or 100 are ignored by Amplitude on Firefox */
      this.$amplitude.setSongPlayedPercentage(clamp(percentage, 0.001, 99.999))
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
