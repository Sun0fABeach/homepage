<template>
  <div class="layout frontpage">
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
