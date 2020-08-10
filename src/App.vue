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
// import loader from "./scripts/loader";
import manifest from "./scripts/manifest.js";
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
    loader.onComplete.add(() => {
      this.assets = loader.resources;
      this.$nextTick(() => {
        this.loading = false;
        console.log(loader.resources);
      });
    });
    loader.add(manifest).load();
  }
};
</script>

<style lang="scss">
@import "~@/scss/main.scss";
</style>
