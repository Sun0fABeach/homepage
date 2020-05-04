<template>
  <section class="page drums">
    <h1 class="amplitude-play-pause">PLAY/PAUSE</h1>
  </section>
</template>

<script>
import scream from '@/assets/audio/reckless/escalate/1_Scream.mp3'
import dumb from '@/assets/audio/reckless/escalate/2_Dumb.mp3'

export default {
  mounted() {
    this.$amplitude.init({
      songs: [
        {
          name: 'Scream',
          artist: 'Reckless',
          album: 'Escalate',
          url: scream,
        },
        {
          name: 'Dumb',
          artist: 'Reckless',
          album: 'Escalate',
          url: dumb,
        },
      ],
    })
  },
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
