<template>
  <section class="page home">
    <h1>Markus Appel</h1>
    <ul>
      <li class="drums">
        <nuxt-link :to="{ name: 'drums' }">Drums</nuxt-link>
      </li>
      <li class="games">
        <nuxt-link :to="{ name: 'games' }">Games</nuxt-link>
      </li>
      <li class="code">
        <a href="https://github.com/Sun0fABeach" target="_blank">Code</a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  layout: 'frontpage',
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden; // don't cause scrollbars with entry animations
}

h1 {
  @include font-name;
  font-size: 2rem;
  font-weight: 100;
  margin-top: 2rem;
  animation-name: flipInX;
  animation-duration: 0.75s;
}

ul {
  @include flex-list;
  flex-direction: column;
  text-align: center;
  font-size: 2.25rem;
  margin-top: 1.75rem;

  li {
    &:not(:first-child) {
      margin-top: 1.25rem;
    }
    a {
      @include link-reset;
      display: inline-block;
      text-transform: uppercase;
      line-height: 1; // needed b/c the fonts have different line heights
    }
    &.drums a {
      @include font-drums;
      animation-name: zoomInLeft;
      animation-duration: 1.5s;
      animation-delay: 0.25s;
      animation-fill-mode: backwards;
    }
    &.games a {
      @include font-games;
      animation-name: zoomInUp;
      animation-duration: 1.5s;
      animation-delay: 0.75s;
      animation-fill-mode: backwards;
    }
    &.code a {
      @include font-code;
      animation-name: zoomInRight;
      animation-duration: 1.5s;
      animation-delay: 1.25s;
      animation-fill-mode: backwards;
    }
  }
}

@media (min-width: $min-tablet) {
  h1 {
    font-size: 1.5rem;
  }

  ul {
    flex-direction: row;
    align-items: baseline;
    font-size: 2.5rem;
    margin-top: 1.75rem;

    li {
      &:not(:first-child) {
        margin-top: 0;
        margin-left: 2.5rem;
      }
      a {
        transition: transform 0.75s, color 0.5s;
        &:hover,
        &:focus {
          color: $color-highlight;
          transform: scale(1.2);
        }
      }
    }
  }
}

@media (min-width: $min-desktop) {
  h1 {
    font-size: 1.75rem;
  }

  ul {
    font-size: 2.75rem;
    margin-top: 2rem;

    li:not(:first-child) {
      margin-left: 3.5rem;
    }
  }
}
</style>
