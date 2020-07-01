<template>
  <nav class="nav-container" :class="{ 'is-open': isOpen }">
    <Icon name="close" class="menu-close" @click="$emit('open', false)" />
    <ul>
      <li class="index">
        <nuxt-link :to="{ name: 'index' }">
          Home
        </nuxt-link>
      </li>
      <li v-for="name in routeLinkNames" :key="name" :class="name">
        <nuxt-link :to="{ name }" @click.native="$emit('open', false)">
          {{ name | capitalize }}
        </nuxt-link>
      </li>
      <li class="code">
        <a href="https://github.com/Sun0fABeach" target="_blank">
          Code
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  filters: {
    capitalize(s) {
      return s ? s[0].toUpperCase() + s.slice(1) : ''
    },
  },
  model: {
    prop: 'isOpen',
    event: 'open',
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      routeLinkNames: this.$router.options.routes
        .filter((r) => r.name !== 'index')
        .map((r) => r.name),
    }
  },
}
</script>

<style lang="scss" scoped>
.nav-container {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  border-right: 1px solid lightgray;
  padding: var(--header-padding-mobile);
  transform: translateX(-100vw);
  transition: transform 750ms;

  &.is-open {
    transform: translateX(0);
  }

  .menu-close {
    align-self: flex-end;
    font-size: 2rem;
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
    text-transform: uppercase;
    line-height: 1; // needed b/c the fonts have different line heights

    &.home {
      @include font-name;
    }
    &.drums {
      @include font-drums;
    }
    &.games {
      @include font-games;
      transform: translateY(5px); // necessary for even vertical alignment
    }
    &.code {
      @include font-code;
    }
    a {
      @include link-reset;
      color: $color-primary;
    }
  }
}

@media (min-width: $min-tablet) {
  .menu-close {
    display: none;
  }

  .nav-container {
    flex-grow: 1;
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
    align-items: baseline;

    li {
      font-size: 1.5rem;

      &.games {
        transform: translateY(1px); // modify alignment tweak
      }

      a {
        color: $color-secondary;

        &.nuxt-link-exact-active {
          color: $color-highlight;
          cursor: default;
        }
        &:hover,
        &:focus {
          &:not(.nuxt-link-exact-active) {
            color: $color-primary;
            text-decoration: underline;
          }
        }
      }
    }
  }
}

@media (min-width: $min-desktop) {
  .nav-container {
    ul {
      width: 45%;
      margin: 0 auto;
    }
  }
}
</style>
