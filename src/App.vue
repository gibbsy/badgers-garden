<template>
  <div id="app">
    <div class="error" v-if="error">
      <h3>Oops something went wrong</h3>
    </div>
    <transition name="quick-fade" mode="out-in" appear>
      <loading v-if="loaded === false" />
      <page-layout v-else :resources="resources" :productList="productList" />
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

const query = `*[_type=="productList"]
{'productList': currentProducts[]->{_id, title, image, description, price}}`;

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
          this.productList = data[0].productList;
          this.dataLoaded = true;
          console.log(data[0].productList);
        },
        (error) => {
          this.error = error;
        }
      );
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
    loader.init(manifest, true);
    this.fetchData();
  },
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
