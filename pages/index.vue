<template>
  <div id="home">
    <h1>
      Markus Appel
    </h1>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'drums' }">Drums</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'games' }">Games</nuxt-link>
      </li>
      <li>
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
}

ul {
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.75rem;
  margin-top: 1.75rem;

  li:not(:first-child) {
    margin-top: 0.75rem;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    transition: transform 0.25s;

    &:hover {
      color: $color-highlight;
      transform: scale(1.25);
    }
  }
}

@media (min-width: $min-tablet) {
  h1 {
    font-size: 2.25rem;
  }

  ul {
    flex-direction: row;
    font-size: 2rem;
    margin-top: 1rem;

    li:not(:first-child) {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
}

@media (min-width: $min-desktop) {
  h1 {
    font-size: 2.75rem;
  }

  ul {
    font-size: 2.25rem;

    li:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
}
</style>
