import Vue from "vue";
import App from "./App.vue";
import BlockContent from "sanity-blocks-vue-component";
Vue.component("block-content", BlockContent);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
