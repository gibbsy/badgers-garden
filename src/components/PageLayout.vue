<template>
  <div class="app__container-inner">
    <div class="logo__container">
      <div class="logo">
        <img alt="Badgers Garden" :src="logo" />
      </div>
    </div>
    <hero-holding :resources="resources" />
    <how-we-grow :resources="resources" :scroller="controller" />
    <products :productList="productList" :scroller="controller" />
    <order-now :resources="resources" :scroller="controller" />
    <footer><a href="">Privacy Policy</a></footer>
  </div>
</template>
<script>
//import ScrollMagic from "ScrollMagic";
import loader from "../scripts/Preloader";
import HeroHolding from "./HeroHolding";
import HowWeGrow from "./HowWeGrow";
import Products from "./Products";
import OrderNow from "./OrderNow";

export default {
  props: ["resources", "productList"],
  components: {
    HeroHolding,
    HowWeGrow,
    Products,
    OrderNow
  },
  data() {
    return {
      logo: this.resources.logo.img.src,
      controller: {}
    };
  },
  methods: {
    initScroll() {}
  },
  mounted() {
    this.controller = new ScrollMagic.Controller();
  }
};
</script>
<style lang="scss"></style>
