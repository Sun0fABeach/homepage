<template>
  <div id="games">
    <h1>Games</h1>
    <ul>
      <li>
        <nuxt-link :to="{ name: 'index' }">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{ name: 'drums' }">Drums</nuxt-link>
      </li>
      <li>
        <a href="https://github.com/Sun0fABeach" target="_blank">Code</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
