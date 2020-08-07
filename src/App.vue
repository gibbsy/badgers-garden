<template>
  <div id="app">
    <div class="logo__container">
      <div class="logo">
        <img alt="Badgers Garden" src="./assets/logo@2x.png" />
      </div>
    </div>
    <hero-holding />
  </div>
</template>

<script>
import HeroHolding from "./components/HeroHolding.vue";

export default {
  name: "App",
  components: {
    HeroHolding
  }
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
#app {
}
</style>
