<template>
  <div class="layout">
    <main>
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  components: { Footer },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
