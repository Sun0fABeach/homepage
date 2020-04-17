<template>
  <header>
    <Icon :src="iconSrc" class="menu-open" @click="menuOpen = true" />
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
  --header-padding-mobile: 1rem; // also needed in nav container
  padding: var(--header-padding-mobile);
}

@media (min-width: $min-tablet) {
  header {
    padding: 0.75rem 1.5rem;
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
