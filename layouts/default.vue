<template>
  <div class="layout site">
    <Header @click:pageLink="adjustSwipe" />
    <main :class="`swipe-${swipeDirection}`">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: { Header, Footer },
  data() {
    return {
      swipeDirection: 'none',
    }
  },
  methods: {
    adjustSwipe(targetPage) {
      const directionDict = { drums: 'right', games: 'left' }
      this.swipeDirection = directionDict[targetPage]
    },
  },
}
</script>

<style lang="scss" scoped>
@include layout;

main {
  position: relative;
  overflow-x: hidden;
}
</style>
