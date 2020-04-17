<template>
  <div class="nav-container" :class="{ 'is-open': isOpen }">
    <Icon :src="iconSrc" class="menu-close" @click="$emit('open', false)" />
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
  </div>
</template>

<script>
import iconSrc from '@/assets/icons/close.svg'
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
      iconSrc,
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
</style>
