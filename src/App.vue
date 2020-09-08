<template>
  <div id="app">
    <div class="error" v-if="error">
      <h3>Oops something went wrong</h3>
    </div>
    <transition name="quick-fade" mode="out-in" appear>
      <loading v-if="loaded === false" />
      <page-layout v-else :resources="resources" :siteCopy="siteCopy" :productList="productList" />
    </transition>
  </div>
</template>

<script>
import sanity from "./scripts/sanity";
import loader from "./scripts/Preloader";
import manifest from "./scripts/manifest";
import bus from "./scripts/bus";
import Loading from "./components/Loading.vue";
import PageLayout from "./components/PageLayout.vue";
import imageUrlBuilder from "@sanity/image-url";

const urlBuilder = imageUrlBuilder(sanity);

const query = `{
  "config": *[_type=="config"]{title,intro,growTxt,insta[]->{title, alt, image{asset}},ctaTxt},
  "slideshow": *[_type=="slideshow"]{'slides': slides[]->{image{asset}}},
  "products": *[_type=="productList"]{'productList': currentProducts[]->{_id, title, image, description, price}}
}`;

export default {
  name: "App",
  components: {
    Loading,
    PageLayout,
  },
  data() {
    return {
      imagesLoaded: false,
      dataLoaded: false,
      animationPlayed: false,
      resources: {},
      siteCopy: {},
      slideshow: {},
      productList: {},
      error: null,
    };
  },
  computed: {
    loaded() {
      return (
        this.imagesLoaded === true &&
        this.dataLoaded === true &&
        this.animationPlayed === true
      );
    },
  },
  methods: {
    fetchData() {
      sanity.fetch(query).then(
        (data) => {
          this.siteCopy = data.config[0];
          this.productList = data.products[0].productList;
          this.slideshow = data.slideshow[0].slides;
          this.dataLoaded = true;
          console.log(data);
          this.loadImages();
        },
        (error) => {
          this.error = error;
        }
      );
    },
    urlFor(source) {
      return urlBuilder.image(source);
    },
    loadImages() {
      const heroW = (window.screen.width * window.devicePixelRatio) / 2;
      const heroH = window.screen.height * window.devicePixelRatio;
      // build the hero slideshow urls and add to preload manifest
      this.slideshow.forEach((slide, i) => {
        let str = "hero_" + i;

        if (!manifest.find((el) => el.id == str)) {
          let item = {
            id: str,
            url: this.urlFor(slide.image).width(heroW).height(heroH).url(),
          };
          manifest.push(item);
        }
      });
      this.$nextTick(loader.init(manifest, true));
    },
  },
  mounted() {
    bus.$on("ANIMATION_PLAYED", () => {
      this.$nextTick(() => (this.animationPlayed = true));
    });
    //  CUSTOM PRELOADER
    bus.$on("LOAD_COMPLETE", () => {
      this.imagesLoaded = true;
      this.resources = loader.resources;
      console.log("LOADING COMPLETE");
    });

    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
