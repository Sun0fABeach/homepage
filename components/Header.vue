<template>
  <header>
    <Icon :src="iconSrc" class="menu-open" @click="menuOpen = true" />
    <h1 :class="$route.name">{{ $route.name }}</h1>
    <NavContainer v-model="menuOpen" />
  </header>
</template>

<script>
import iconSrc from '@/assets/icons/hamburger_menu.svg'
import NavContainer from '@/components/NavContainer'
import Icon from '@/components/Icon'

export default {
  components: {
    NavContainer,
    Icon,
  },
  data() {
    return {
      iconSrc,
      menuOpen: false,
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  --header-padding-mobile: 1rem; // also needed in nav container
  padding: var(--header-padding-mobile);
}

h1 {
  margin-left: auto;
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.625rem;
  color: $color-highlight;

  &.drums {
    font-family: $font-drums;
    font-weight: bold;
    letter-spacing: 0.125rem;
  }
  &.games {
    font-family: $font-games;
  }
}

@media (min-width: $min-tablet) {
  header {
    padding: 0.75rem 1.5rem;
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
    padding: 0.75rem 2.25rem;
  }
}
</style>
