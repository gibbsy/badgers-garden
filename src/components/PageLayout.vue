<template>
  <div class="app__container-inner">
    <div class="logo__container">
      <div class="logo">
        <img alt="Badgers Garden" :src="logo" />
      </div>
    </div>
    <hero :resources="resources" />
    <how-we-grow :resources="resources" :scroller="controller" />
    <products :productList="productList" :scroller="controller" />
    <order-now :resources="resources" :scroller="controller" />
    <footer><a href="">Privacy Policy</a></footer>
  </div>
</template>
<script>
import loader from "../scripts/Preloader";
import Hero from "./Hero";
import HowWeGrow from "./HowWeGrow";
import Products from "./Products";
import OrderNow from "./OrderNow";

export default {
  props: ["resources", "productList"],
  components: {
    Hero,
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
    gsap.fromTo(
      ".logo",
      { rotationY: 90, opacity: 0 },
      { rotationY: 0, opacity: 1 },
      1
    );
  }
};
</script>
<style lang="scss"></style>
