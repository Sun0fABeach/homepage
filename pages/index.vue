<template>
  <div id="home">
    <h1>
      Markus Appel
    </h1>
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
  </div>
</template>

<script>
export default {
  layout: 'frontpage',
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden; // don't cause scrollbars with entry animations
}

h1 {
  font-size: 2rem;
  font-weight: 100;
  font-family: $font-name;
  animation-name: flipInX;
  animation-duration: 0.75s;
}

ul {
  @include flex-list;
  flex-direction: column;
  align-items: baseline;
  text-align: center;
  font-size: 1.75rem;
  margin-top: 1.75rem;

  li {
    &:not(:first-child) {
      margin-top: 0.75rem;
    }
    a {
      @include link-reset;
      display: inline-block;
      text-transform: uppercase;
      transition: transform 0.75s, color 0.5s;
      line-height: 1;

      &:hover {
        color: $color-highlight;
        transform: scale(1.2);
      }
    }
    &.drums a {
      font-family: $font-drums;
      font-weight: bold;
      letter-spacing: 0.125rem;
      animation-name: zoomInLeft;
      animation-duration: 1.5s;
      animation-delay: 0.25s;
      animation-fill-mode: backwards;
    }
    &.games a {
      font-family: $font-games;
      animation-name: zoomInUp;
      animation-duration: 1.5s;
      animation-delay: 0.75s;
      animation-fill-mode: backwards;
    }
    &.code a {
      font-family: $font-code;
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
    font-size: 2rem;
    margin-top: 1.25rem;

    li:not(:first-child) {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
}

@media (min-width: $min-desktop) {
  h1 {
    font-size: 1.75rem;
  }

  ul {
    font-size: 2.25rem;
    margin-top: 1.375rem;

    li:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
}
</style>
