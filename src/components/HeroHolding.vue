<template>
  <div class="hero__container-outer">
    <div class="hero__copy-container">
      <div class="hero__copy">
        <h1>Fresh locally grown salad delivered to your door.</h1>
        <ul class="hero__product-list">
          <li>
            Mixed tasty salad leaves -
            <span style="font-weight: bold;">£2.5 / 150g</span>
          </li>
          <li>
            Loads of varieties of tomatoes -
            <span style="font-weight: bold;">£2.5 / 500g</span>
          </li>
          <li>
            Salad plug plants (mixed) -
            <span style="font-weight: bold;">£5 / 10 plugs</span>
          </li>
        </ul>
        <h2>For more information or to order contact:</h2>
        <ul class="hero__contact-details">
          <li>
            <a href="mailto:badgerbolts@gmail.com">badgerbolts@gmail.com</a>
          </li>
          <li>
            <a href="tel:+447973489993">Call 07973 489993</a>
          </li>
          <li>
            <a href="https://www.instagram.com/thebadgersgarden/"
              >follow @thebadgersgarden for updates</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="hero__image-container">
      <!-- <div class="hero__image-inner" :class="{ ready: ready }"></div> -->
      <slideshow :slides="slides" />
    </div>
  </div>
</template>

<script>
import loader from "../scripts/Preloader";
import Slideshow from "./Slideshow";
export default {
  props: ["assets"],
  components: {
    Slideshow
  },
  data() {
    return {
      ready: false,
      slides: []
    };
  },
  methods: {
    scaleImage() {}
  },
  mounted() {
    // console.log(loader.resources["hero_1"].img.src);
    // let slides = loader.resources.filter(el => el[id].includes("hero"));
    //console.log(slides);
    /*const imgCont = document.querySelector(".hero__image-inner");
    console.log(loader.resources["hero_1"].url);
    imgCont.style.backgroundImage = `url(${loader.resources["hero_1"].img.src})`;
    this.ready = true; */
    let resources = loader.resources;
    for (let key in resources) {
      let res = resources[key];
      if (res["id"].includes("hero")) {
        this.slides.push(res);
      }
    }
    console.log(this.slides);
    this.ready = true;
  }
};
</script>
<style lang="scss">
@import "~@/scss/hero.scss";
</style>
