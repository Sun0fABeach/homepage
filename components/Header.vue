<template>
  <header>
    <ul>
      <li class="home">
        <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      </li>
      <li v-for="name in routeLinkNames" :key="name" :class="name">
        <nuxt-link :to="{ name }">{{ name | capitalize }}</nuxt-link>
      </li>
      <li class="code">
        <a href="https://github.com/Sun0fABeach" target="_blank">Code</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  filters: {
    capitalize(s) {
      return s ? s[0].toUpperCase() + s.slice(1) : ''
    },
  },
  data() {
    return {
      routeLinkNames: [],
    }
  },
  watch: {
    '$route.name': {
      handler(routeName) {
        this.routeLinkNames = this.$router.options.routes
          .filter((r) => !['index', routeName].includes(r.name))
          .map((r) => r.name)
      },
      immediate: true,
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  padding: 0.5rem 1rem;
}

ul {
  @include flex-list;
  justify-content: space-between;
  align-items: baseline;

  li {
    font-size: 1.5rem;

    &.home {
      font-family: $font-name;
      font-weight: bold;
    }
    &.drums {
      font-family: $font-drums;
      font-weight: bold;
      letter-spacing: 0.125rem;
    }
    &.games {
      font-family: $font-games;
    }
    &.code {
      font-family: $font-code;
    }
    a {
      @include link-reset;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: $min-tablet) {
  header {
    padding: 0.75rem 1.5rem;
  }
}
@media (min-width: $min-desktop) {
  header {
    padding: 1rem 2.25rem;
  }
}
</style>
