<template>
  <section class="page page--error">
    <div class="circle">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred</h1>
    </div>
  </section>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style lang="scss" scoped>
.page--error {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.circle {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    padding-top: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid lighten($color-secondary, 50%);
    border-radius: 50%;
    background-color: lighten($color-secondary, 90%);
  }
  h1 {
    position: relative;
    padding: 0 1.5rem;
    text-align: center;
    font-size: 2rem;
    color: lighten($color-primary, 15%);
  }
}

@media (orientation: landscape) {
  .circle {
    &::before {
      padding-top: 5rem;
      border-radius: 999px;
    }
    h1 {
      padding: 0 2rem;
    }
  }
}
</style>
