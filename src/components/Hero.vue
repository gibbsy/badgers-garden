<template>
  <div class="hero__container-outer">
    <div class="hero__copy-container">
      <div class="hero__copy" data-splitting>
        <h1>{{ content.title }}</h1>
        <!-- <p>{{ content.intro }}</p> -->
        <block-content :blocks="content.intro"></block-content>
      </div>
      <div class="hero__cta-btns">
        <a href @click.prevent="viewProduce">View produce</a>
        <a href @click.prevent="orderNow">Order now</a>
      </div>
    </div>
    <div class="hero__image-container">
      <slideshow :slides="slides" :delay-start="700" />
    </div>
  </div>
</template>

<script>
import loader from "../scripts/Preloader";
import Slideshow from "./Slideshow";
export default {
  props: ["resources", "content"],
  components: {
    Slideshow
  },
  data() {
    return {
      slides: []
    };
  },
  methods: {
    splitText() {
      Splitting({
        /* target: String selector, Element, Array of Elements, or NodeList */
        target: "[data-splitting]",
        /* by: String of the plugin name */
        by: "lines",
        /* key: Optional String to prefix the CSS variables */
        key: null
      });
    },
    viewProduce() {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#products",
        ease: Power2.easeInOut
      });
    },
    orderNow() {
      gsap.to(window, {
        duration: 3,
        scrollTo: "#order-now",
        ease: Power2.easeInOut
      });
    }
  },
  mounted() {
    for (let key in this.resources) {
      let res = this.resources[key];
      if (res["id"].includes("hero")) {
        this.slides.push(res);
      }
    }
    this.$nextTick(this.splitText);
  }
};
</script>
<style lang="scss">
@import "~@/scss/hero.scss";
</style>
