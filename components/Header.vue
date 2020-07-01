<template>
  <header>
    <Icon name="menu" class="menu-open" @click="menuOpen = true" />
    <h1 :class="$route.name">{{ $route.name }}</h1>
    <NavContainer v-model="menuOpen" />
  </header>
</template>

<script>
import NavContainer from '@/components/NavContainer'
import Icon from '@/components/Icon'

export default {
  components: {
    NavContainer,
    Icon,
  },
  data() {
    return {
      menuOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  --header-padding-mobile: 1.25rem; // also needed in nav container
  padding: var(--header-padding-mobile);

  .menu-open {
    font-size: 2rem;
  }
}

h1 {
  margin-left: auto;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.625rem;
  color: $color-highlight;

  &.drums {
    @include font-drums;
  }
  &.games {
    @include font-games;
  }
}

@media (min-width: $min-tablet) {
  header {
    padding: 1rem 1.5rem;
  }
  h1 {
    display: none;
  }
  .menu-open {
    display: none;
  }
}

@media (min-width: $min-desktop) {
  header {
    padding: 1.25rem 2.25rem;
  }
}
</style>
