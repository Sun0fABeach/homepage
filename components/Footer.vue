<template>
  <footer>
    <ul>
      <li>
        <a href="#">Imprint</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  padding: 0.75rem;

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    padding-left: 0;
  }

  li:not(:first-child) {
    margin-left: 1.5rem;
  }

  a {
    text-decoration: none;
    color: $color-secondary;
  }
}

@media (min-width: $min-tablet) {
  footer {
    padding: 0.75rem;

    li:not(:first-child) {
      margin-left: 2rem;
    }
  }
}

@media (min-width: $min-desktop) {
  footer {
    padding: 0.875rem;

    li:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
}
</style>
