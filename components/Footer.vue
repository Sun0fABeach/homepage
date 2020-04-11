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
  padding: 4rem 0.75rem 0.75rem;

  ul {
    @include flex-list;
    justify-content: center;
  }

  li:not(:first-child) {
    margin-left: 1.5rem;
  }

  a {
    @include link-reset;
    color: $color-secondary;
  }
}

@media (min-width: $min-tablet) {
  footer {
    padding: 3.5rem 0.75rem 1rem;

    li:not(:first-child) {
      margin-left: 2rem;
    }
  }
}

@media (min-width: $min-desktop) {
  footer {
    padding: 2.5rem 0.75rem 1.25rem;

    li:not(:first-child) {
      margin-left: 2.5rem;
    }
  }
}
</style>
