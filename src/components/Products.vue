<template>
  <div id="products" class="products__container-outer fade-in">
    <h1 class="cutouts">Bang in season!</h1>
    <div
      class="product"
      v-for="(product, index) in productList"
      :key="index"
      :class="[
        { 'pull-right': index % 2 == 0, 'pull-left': index % 2 != 0 },
        'product-' + index
      ]"
    >
      <div class="product__image">
        <img
          :src="
            urlFor(product.image)
              .width(435)
              .height(300)
              .url()
          "
          :alt="'Image of ' + product.title"
        />
      </div>
      <div
        class="product__text"
        :class="[
          { 'pull-right': index % 2 == 0, 'pull-left': index % 2 != 0 },
          'product-' + index
        ]"
      >
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <div class="product__cta">
          <h2>{{ product.price }}</h2>
          <a href @click.prevent="orderNow" class="order__cta">Order now</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import scrollController from "../scripts/scrollController";
import sanity from "../scripts/sanity";
import imageUrlBuilder from "@sanity/image-url";

const urlBuilder = imageUrlBuilder(sanity);

export default {
  props: ["productList"],
  data() {
    return {};
  },
  methods: {
    initScrollActions() {
      let prodTrigger = window.screen.width > 767 ? 0.8 : 0.5;
      var scene1 = new ScrollMagic.Scene({
        triggerElement: ".products__container-outer",
        triggerHook: 0.7
      })
        .setClassToggle(".products__container-outer", "active")
        .addTo(scrollController);

      let productEls = document.querySelectorAll(".product");
      console.log(productEls);
      productEls.forEach((el, index) => {
        let scene = new ScrollMagic.Scene({
          triggerElement: el,
          triggerHook: prodTrigger
        })
          .setClassToggle(el, "active")
          .reverse(false)
          .addTo(scrollController);
      });
    },
    urlFor(source) {
      return urlBuilder.image(source);
    },
    orderNow() {
      gsap.to(window, {
        duration: 2,
        scrollTo: "#order-now",
        ease: Power2.easeInOut
      });
    }
  },
  mounted() {
    this.$nextTick(this.initScrollActions);
  }
};
</script>
<style lang="scss">
@import "~@/scss/products.scss";
</style>
