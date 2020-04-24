<template>
  <div class="layout site">
    <Header @click:pageLink="adjustSwipe" />
    <main :class="swipeClass">
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
      swipeClass: null,
    }
  },
  methods: {
    adjustSwipe(targetPage) {
      const directionDict = { drums: 'swipe-right', games: 'swipe-left' }
      this.swipeClass = directionDict[targetPage]
    },
  },
}
</script>

<style lang="scss" scoped>
@include layout;
main {
  position: relative;
}
</style>
