<template>
  <header>
    <img :src="menuOpenSrc" class="menu-open" @click="menuOpen = true" />

    <div class="nav-container" :class="{ 'is-open': menuOpen }">
      <img :src="menuCloseSrc" class="menu-close" @click="menuOpen = false" />
      <ul>
        <li class="index">
          <nuxt-link :to="{ name: 'index' }">
            Home
          </nuxt-link>
        </li>
        <li v-for="name in routeLinkNames" :key="name" :class="name">
          <nuxt-link :to="{ name }" @click.native="menuOpen = false">
            {{ name | capitalize }}
          </nuxt-link>
        </li>
        <li class="code">
          <a href="https://github.com/Sun0fABeach" target="_blank">
            Code
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import menuOpenSrc from '@/assets/icons/hamburger_menu.svg'
import menuCloseSrc from '@/assets/icons/close.svg'

export default {
  filters: {
    capitalize(s) {
      return s ? s[0].toUpperCase() + s.slice(1) : ''
    },
  },
  data() {
    return {
      menuOpenSrc,
      menuCloseSrc,
      menuOpen: false,
      routeLinkNames: this.$router.options.routes
        .filter((r) => r.name !== 'index')
        .map((r) => r.name),
    }
  },
}
</script>

<style lang="scss" scoped>
$header-padding-mobile: 1rem;

header {
  padding: $header-padding-mobile;
}

.menu-open,
.menu-close {
  width: 2.125rem;
  opacity: 0.75;
}

.nav-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  border-right: 1px solid lightgray;
  padding: $header-padding-mobile;
  transform: translateX(-100vw);
  transition: transform 750ms;

  &.is-open {
    transform: translateX(0);
  }

  .menu-close {
    align-self: flex-end;
  }
}

ul {
  @include flex-list;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 1;

  li {
    font-size: 2.25rem;

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
      line-height: 1; // necessary for even vertical alignment
    }
    a {
      @include link-reset;
      color: $color-primary;

      &.nuxt-link-exact-active {
        text-decoration: underline;
      }
    }
  }
}

@media (min-width: $min-tablet) {
  header {
    padding: 0.75rem 1.5rem;
  }

  .menu-open,
  .menu-close {
    display: none;
  }

  .nav-container {
    position: relative;
    top: 0;
    left: 0;
    width: auto;
    height: auto;
    border-right: none;
    padding: 0;
    transform: none;
  }

  ul {
    flex-direction: row;
    justify-content: space-between;

    li {
      font-size: 1.5rem;

      a {
        color: $color-secondary;

        &:hover,
        &.nuxt-link-exact-active {
          text-decoration: underline;
          color: $color-primary;
        }
      }
    }
  }
}

@media (min-width: $min-desktop) {
  header {
    padding: 0.75rem 2.25rem;
  }
}
</style>
