<template>
  <div class="container">
    <div class="heading">
      <h2>{{ heading }}</h2>
      <a class="icon" :href="hrefCode" target="_blank">
        <Icon name="github" class="github-icon" />
      </a>
    </div>
    <a class="thumb" :href="hrefGame" target="_blank">
      <img :src="imgSrc" :alt="imgAlt" />
    </a>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  props: {
    heading: {
      type: String,
      required: true,
    },
    hrefGame: {
      type: String,
      required: true,
    },
    hrefCode: {
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
.container {
  display: flex;
  flex-direction: column;
}

.heading {
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    @include font-games;
    font-size: 1.5rem;
    font-weight: normal;
  }

  .github-icon {
    font-size: 2rem;
  }
}

a {
  @include link-reset;

  &.thumb > img {
    width: 100%;
    margin-top: 0.75rem;
    @include shadow(1);
  }
}

@media (min-width: $min-tablet) {
  .heading {
    padding: 0 0.75rem;
  }

  a {
    &.thumb {
      > img {
        margin-top: 0.5rem;
        filter: grayscale(100%);
        transition: all 0.5s;
      }

      &:hover,
      &:focus {
        > img {
          filter: none;
          transform: scale(1.05);
          @include shadow(4);
        }
      }
    }
  }
}
</style>
