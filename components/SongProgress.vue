<template>
  <div>
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
}
</script>

<style lang="scss" scoped>
div {
  position: relative;
  width: 300px;
  height: 4px;
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
</style>
