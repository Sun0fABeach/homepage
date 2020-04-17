<template>
  <img v-bind="$attrs" v-on="$listeners" />
</template>

<script>
export default {
  inheritAttrs: false,
}
</script>

<style lang="scss" scoped>
img {
  width: 2.125rem;
  opacity: 0.7;
}
</style>
