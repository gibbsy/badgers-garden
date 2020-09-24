<template>
  <div id="app">
    <div class="error" v-if="error">
      <h3>Oops something went wrong</h3>
    </div>
    <transition name="quick-fade" mode="out-in" appear>
      <loading v-if="loaded === false" />
      <page-layout
        v-else
        :resources="resources"
        :siteCopy="siteCopy"
        :productList="productList"
        :winSize="winSize"
      />
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
  "config": *[_type=="config"]{title,intro,growTxt,growBg,insta[]->{title, alt, image{asset}},ctaTxt, ctaBg},
  "slideshow": *[_type=="slideshow"]{'slides': slides[]->{image{asset}}},
  "products": *[_type=="productList"]{'productList': currentProducts[]->{_id, title, image, description, price}}
}`;

export default {
  name: "App",
  components: {
    Loading,
    PageLayout
  },
  data() {
    return {
      imagesLoaded: false,
      dataLoaded: false,
      animationPlayed: false,
      winSize: {},
      resources: {},
      siteCopy: {},
      slideshow: {},
      productList: {},
      error: null
    };
  },
  computed: {
    loaded() {
      return (
        this.imagesLoaded === true &&
        this.dataLoaded === true &&
        this.animationPlayed === true
      );
    }
  },
  methods: {
    fetchData() {
      sanity.fetch(query).then(
        data => {
          this.siteCopy = data.config[0];
          this.productList = data.products[0].productList;
          this.slideshow = data.slideshow[0].slides;
          this.dataLoaded = true;
          console.log(data);
          this.loadImages();
        },
        error => {
          this.error = error;
        }
      );
    },
    urlFor(source) {
      return urlBuilder.image(source);
    },
    calcRes() {
      this.winSize = {
        width: window.innerWidth,
        height: window.innerHeight,
        dpr: window.devicePixelRatio
      };
    },
    loadImages() {
      const { winSize } = this;
      // detect screen size to set the hero aspect ratio
      const w = winSize.width;
      const h = winSize.height;
      let heroW, heroH;

      if (w > 1919) {
        heroW = 1280;
        heroH = 1080;
      } else if (w > 1279) {
        heroW = 720;
        heroH = 640;
      } else if (w > 768) {
        heroW = 512;
        heroH = 420;
      } else if (w == 768) {
        heroW = 768;
        heroH = 600;
      } else {
        // for mobile
        heroW = Math.round(w);
        heroH = Math.round(h * 0.4);
      }
      // init the loader but don't autostart
      loader.init(manifest, false);
      // build the hero slideshow urls and add to preload manifest
      this.slideshow.forEach((slide, i) => {
        let str = "hero_" + i;
        let item = {
          id: str,
          url: this.urlFor(slide.image)
            .width(heroW)
            .height(heroH)
            .format("jpg")
            .quality(40)
            .dpr(winSize.dpr > 1 ? 2 : 1)
            .url()
        };
        loader.addImage(item);
      });
      // add the bg parallax images
      let bgW, bgH;
      if (w > 1919) {
        bgW = 1920;
        bgH = 1080;
      } else if (w >= 1440) {
        bgW = 1440;
        bgH = 1024;
      } else if (w >= 1200) {
        bgW = 1280;
        bgH = 800;
      } else if (w >= 1024) {
        bgW = 1024;
        bgH = 768;
      } else if (w >= 768) {
        bgW = 768;
        bgH = 540;
      } else {
        bgW = 440;
        bgH = 720;
      }
      const growBg = {
        id: "how_we_grow",
        url: this.urlFor(this.siteCopy.growBg)
          .width(bgW)
          .height(bgH)
          .format("jpg")
          .quality(20)
          .dpr(winSize.dpr > 1 ? 2 : 1)
          .url()
      };
      loader.addImage(growBg);
      const ctaBg = {
        id: "garden",
        url: this.urlFor(this.siteCopy.ctaBg)
          .width(bgW)
          .height(bgH)
          .format("jpg")
          .quality(20)
          .dpr(winSize.dpr > 1 ? 2 : 1)
          .url()
      };
      loader.addImage(ctaBg);
      // load the images
      this.$nextTick(loader.start());
    }
  },
  mounted() {
    bus.$on("ANIMATION_PLAYED", () => {
      this.$nextTick(() => (this.animationPlayed = true));
    });
    bus.$on("LOAD_COMPLETE", () => {
      this.imagesLoaded = true;
      this.resources = loader.resources;
      console.log("LOADING COMPLETE");
    });
    this.fetchData();
    this.calcRes();
  }
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
