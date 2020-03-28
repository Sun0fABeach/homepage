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

<style lang="scss" scoped>
#home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

h1 {
  font-size: 2rem;
  font-weight: 100;
  font-family: $font-name;
}

ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.75rem;
  margin-top: 1.75rem;

  li {
    &:not(:first-child) {
      margin-top: 0.75rem;
    }
    a {
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      color: inherit;
      transition: transform 0.75s;
      line-height: 1;

      &:hover {
        color: $color-highlight;
        transform: scale(1.25);
      }
    }
    &.drums a {
      font-family: $font-drums;
      font-weight: bold;
      letter-spacing: 0.125rem;
    }
    &.games a {
      font-family: $font-games;
    }
    &.code a {
      font-family: $font-code;
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
