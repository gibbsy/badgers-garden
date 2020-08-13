<template>
  <div class="app__container-inner">
    <div class="logo__container">
      <ul class="contact-details">
        <li>
          <a href="mailto:badgerbolts@gmail.com">badgerbolts@gmail.com</a>
        </li>
        <li>
          <a href="tel:+447973489993">Call 07973 489993</a>
        </li>
      </ul>
      <div class="logo">
        <img alt="Badgers Garden" :src="logo" />
      </div>
    </div>
    <hero :resources="resources" />
    <how-we-grow :resources="resources" />
    <products :productList="productList" />
    <order-now :resources="resources" />
    <footer><a href="">Privacy Policy</a></footer>
  </div>
</template>
<script>
import scrollController from "../scripts/scrollController";
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
      logo: this.resources.logo.img.src
    };
  },
  methods: {
    initScroll() {}
  },
  mounted() {
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
