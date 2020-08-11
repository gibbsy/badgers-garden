<template>
  <div id="app">
    <div class="error" v-if="error"><h1>Oops something went wrong</h1></div>
    <transition name="quick-fade" mode="out-in" appear>
      <loading v-if="loading" />
    </transition>
    <transition name="quick-fade" mode="out-in" appear>
      <page-layout
        v-if="!loading"
        :resources="resources"
        :productList="productList"
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

const query = `*[_type=="productList" && title=="Current Products"]
{'productList': currentProducts[]->{_id, title, image, description, price}}`;

export default {
  name: "App",
  components: {
    Loading,
    PageLayout
  },
  data() {
    return {
      imagesLoading: true,
      dataLoading: true,
      resources: {},
      productList: {},
      error: null
    };
  },
  computed: {
    loading() {
      return !(this.imagesLoading == false && this.dataLoading == false);
    }
  },
  methods: {
    fetchData() {
      sanity.fetch(query).then(
        data => {
          this.productList = data[0].productList;
          this.dataLoading = false;
          console.log(data[0].productList);
        },
        error => {
          this.error = error;
        }
      );
    }
  },
  mounted() {
    //  CUSTOM PRELOADER
    bus.$on("LOAD_COMPLETE", () => {
      this.imagesLoading = false;
      this.resources = loader.resources;
      console.log("LOADING COMPLETE");
    });
    loader.init(manifest, true);
    this.fetchData();
  }
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
