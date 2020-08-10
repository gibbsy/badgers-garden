<template>
  <div id="app">
    <transition name="quick-fade" mode="out-in" appear>
      <loading v-if="loading" />
    </transition>
    <transition name="quick-fade" mode="out-in" appear>
      <page-layout v-if="!loading" />
    </transition>
  </div>
</template>

<script>
import loader from "./scripts/Preloader.js";
import manifest from "./scripts/manifest.js";
import bus from "./scripts/bus";
import Loading from "./components/Loading.vue";
import PageLayout from "./components/PageLayout.vue";

export default {
  name: "App",
  components: {
    Loading,
    PageLayout
  },
  data() {
    return {
      loading: "true",
      assets: {}
    };
  },
  mounted() {
    //  CUSTOM PRELOADER
    bus.$on("LOAD_COMPLETE", () => {
      this.loading = false;
      console.log("LOADING COMPLETE");
    });
    loader.init(manifest, true);
  }
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
