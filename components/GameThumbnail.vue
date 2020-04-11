<template>
  <a :href="href" target="_blank">
    <h2>{{ heading }}</h2>
    <img :src="imgSrc" :alt="imgAlt" />
  </a>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    href: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  @include link-reset;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: $font-games;
    font-weight: normal;
  }

  img {
    width: 100%;
    margin-top: 1rem;
    box-shadow: 4px 4px 8px 4px darkgray;
  }
}

@media (min-width: $min-desktop) {
  a {
    h2 {
      transition: color 0.25s;
    }
    &:hover {
      > h2 {
        color: $color-highlight;
      }
      > img {
        filter: none;
      }
    }

    img {
      filter: grayscale(100%);
      transition: filter 0.5s;
    }
  }
}
</style>
