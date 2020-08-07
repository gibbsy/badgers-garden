<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hero-holding/>
  </div>
</template>

<script>
import HeroHolding from './components/HeroHolding.vue'

export default {
  name: 'App',
  components: {
    HeroHolding
  }
}
</script>

<style lang="scss">
#app {
  @import "~@/scss/main.scss";
}
</style>
