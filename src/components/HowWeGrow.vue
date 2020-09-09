<template>
  <div id="grow" class="grow__container-outer">
    <div class="grow__parallax parallax-container">
      <div class="grow__bg-parallax" :style="{ backgroundImage: bgImg }"></div>
      <div class="grow__how-we-grow">
        <article class="grow__how-we-grow-text">
          <h1 class="cutouts">How we grow it</h1>
          <block-content :blocks="content.copy"></block-content>
          <!-- <p v-for="block in content.copy">{{block}}</p> -->
          <ul class="contact-details contact-mobile">
            <li>
              <a href="mailto:badgerbolts@gmail.com">badgerbolts@gmail.com</a>
            </li>
            <li>
              <a href="tel:+447973489993">Call 07973 489993</a>
            </li>
            <li>
              <a
                class="insta"
                href="https://www.instagram.com/thebadgersgarden/"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.8 42.8">
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <path
                        class="cls-1"
                        d="M42.8,21.4c0,4.3,0,7.2-.1,8.8-.2,3.9-1.3,6.9-3.5,9a13.41,13.41,0,0,1-9,3.5c-1.6.1-4.6.1-8.8.1s-7.2,0-8.8-.1c-3.9-.2-6.9-1.3-9-3.5S.3,34.1.1,30.2C0,28.6,0,25.6,0,21.4s0-7.2.1-8.8c.2-3.9,1.3-6.9,3.5-9S8.7.3,12.6.1C14.2,0,17.2,0,21.4,0s7.2,0,8.8.1c3.9.2,6.9,1.3,9,3.5a13.41,13.41,0,0,1,3.5,9C42.7,14.2,42.8,17.1,42.8,21.4ZM23.5,3.8H16.4c-.7,0-1.6,0-2.7.1a12.31,12.31,0,0,0-2.9.3,8.3,8.3,0,0,0-2,.5A9.63,9.63,0,0,0,6.3,6.3,7.16,7.16,0,0,0,4.7,8.8a8.3,8.3,0,0,0-.5,2c-.1.8-.2,1.7-.3,2.9s-.1,2-.1,2.7v10c0,.7,0,1.6.1,2.7A12.31,12.31,0,0,0,4.2,32a19.27,19.27,0,0,0,.5,2,9.63,9.63,0,0,0,1.6,2.5,7.16,7.16,0,0,0,2.5,1.6,8.3,8.3,0,0,0,2,.5c.8.1,1.7.2,2.9.3s2,.1,2.7.1h10c.7,0,1.6,0,2.7-.1a12.31,12.31,0,0,0,2.9-.3,8.3,8.3,0,0,0,2-.5,9.63,9.63,0,0,0,2.5-1.6A7.16,7.16,0,0,0,38.1,34a8.3,8.3,0,0,0,.5-2c.1-.8.2-1.7.3-2.9s.1-2,.1-2.7v-10c0-.7,0-1.6-.1-2.7a12.31,12.31,0,0,0-.3-2.9,8.3,8.3,0,0,0-.5-2,9.63,9.63,0,0,0-1.6-2.5A7.16,7.16,0,0,0,34,4.7a8.3,8.3,0,0,0-2-.5c-.8-.1-1.7-.2-2.9-.3s-2-.1-2.7-.1Zm5.6,9.8a10.64,10.64,0,0,1,3.2,7.8,10.8,10.8,0,0,1-3.2,7.8,10.64,10.64,0,0,1-7.8,3.2,10.8,10.8,0,0,1-7.8-3.2,10.64,10.64,0,0,1-3.2-7.8,10.8,10.8,0,0,1,3.2-7.8,10.64,10.64,0,0,1,7.8-3.2A10.26,10.26,0,0,1,29.1,13.6ZM26.4,26.4a6.88,6.88,0,0,0,2.1-5,7.11,7.11,0,0,0-2.1-5.1,6.94,6.94,0,0,0-5.1-2.1,7.17,7.17,0,0,0-7.2,7.2,6.57,6.57,0,0,0,2.1,5,6.94,6.94,0,0,0,5.1,2.1A6.94,6.94,0,0,0,26.4,26.4ZM34.6,8.1a2.6,2.6,0,1,1-3.6,0,2.43,2.43,0,0,1,3.6,0Z"
                      />
                    </g>
                  </g>
                </svg>
                @thebadgersgarden</a
              >
            </li>
          </ul>
        </article>
      </div>
    </div>
    <div class="grow__section-two fade-in">
      <div class="grow__contact contact-details">
        <ul>
          <li>
            <a href="mailto:badgerbolts@gmail.com">badgerbolts@gmail.com</a>
          </li>
          <li>
            <a href="tel:+447973489993">Call 07973 489993</a>
          </li>
          <li>
            <a class="insta" href="https://www.instagram.com/thebadgersgarden/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 42.8 42.8">
                <g id="Layer_2" data-name="Layer 2">
                  <g id="Layer_1-2" data-name="Layer 1">
                    <path
                      class="cls-1"
                      d="M42.8,21.4c0,4.3,0,7.2-.1,8.8-.2,3.9-1.3,6.9-3.5,9a13.41,13.41,0,0,1-9,3.5c-1.6.1-4.6.1-8.8.1s-7.2,0-8.8-.1c-3.9-.2-6.9-1.3-9-3.5S.3,34.1.1,30.2C0,28.6,0,25.6,0,21.4s0-7.2.1-8.8c.2-3.9,1.3-6.9,3.5-9S8.7.3,12.6.1C14.2,0,17.2,0,21.4,0s7.2,0,8.8.1c3.9.2,6.9,1.3,9,3.5a13.41,13.41,0,0,1,3.5,9C42.7,14.2,42.8,17.1,42.8,21.4ZM23.5,3.8H16.4c-.7,0-1.6,0-2.7.1a12.31,12.31,0,0,0-2.9.3,8.3,8.3,0,0,0-2,.5A9.63,9.63,0,0,0,6.3,6.3,7.16,7.16,0,0,0,4.7,8.8a8.3,8.3,0,0,0-.5,2c-.1.8-.2,1.7-.3,2.9s-.1,2-.1,2.7v10c0,.7,0,1.6.1,2.7A12.31,12.31,0,0,0,4.2,32a19.27,19.27,0,0,0,.5,2,9.63,9.63,0,0,0,1.6,2.5,7.16,7.16,0,0,0,2.5,1.6,8.3,8.3,0,0,0,2,.5c.8.1,1.7.2,2.9.3s2,.1,2.7.1h10c.7,0,1.6,0,2.7-.1a12.31,12.31,0,0,0,2.9-.3,8.3,8.3,0,0,0,2-.5,9.63,9.63,0,0,0,2.5-1.6A7.16,7.16,0,0,0,38.1,34a8.3,8.3,0,0,0,.5-2c.1-.8.2-1.7.3-2.9s.1-2,.1-2.7v-10c0-.7,0-1.6-.1-2.7a12.31,12.31,0,0,0-.3-2.9,8.3,8.3,0,0,0-.5-2,9.63,9.63,0,0,0-1.6-2.5A7.16,7.16,0,0,0,34,4.7a8.3,8.3,0,0,0-2-.5c-.8-.1-1.7-.2-2.9-.3s-2-.1-2.7-.1Zm5.6,9.8a10.64,10.64,0,0,1,3.2,7.8,10.8,10.8,0,0,1-3.2,7.8,10.64,10.64,0,0,1-7.8,3.2,10.8,10.8,0,0,1-7.8-3.2,10.64,10.64,0,0,1-3.2-7.8,10.8,10.8,0,0,1,3.2-7.8,10.64,10.64,0,0,1,7.8-3.2A10.26,10.26,0,0,1,29.1,13.6ZM26.4,26.4a6.88,6.88,0,0,0,2.1-5,7.11,7.11,0,0,0-2.1-5.1,6.94,6.94,0,0,0-5.1-2.1,7.17,7.17,0,0,0-7.2,7.2,6.57,6.57,0,0,0,2.1,5,6.94,6.94,0,0,0,5.1,2.1A6.94,6.94,0,0,0,26.4,26.4ZM34.6,8.1a2.6,2.6,0,1,1-3.6,0,2.43,2.43,0,0,1,3.6,0Z"
                    />
                  </g>
                </g>
              </svg>
              @thebadgersgarden
            </a>
          </li>
        </ul>
      </div>
      <div class="grow__insta">
        <div class="insta-img-wrapper" v-for="img in content.insta">
          <a href="https://www.instagram.com/thebadgersgarden/" target="_blank">
            <img
              :src="
                urlFor(img.image)
                  .width(400)
                  .height(400)
                  .url()
              "
              :alt="img.alt"
            />
          </a>
        </div>
      </div>
    </div>
    <div class="grow__badger">
      <img :src="badgerImg" />
    </div>
  </div>
</template>
<script>
import scrollController from "../scripts/scrollController";
import sanity from "../scripts/sanity";
import imageUrlBuilder from "@sanity/image-url";

const urlBuilder = imageUrlBuilder(sanity);

export default {
  props: ["resources", "content"],
  data() {
    return {
      bgImg: `url(${this.resources.how_we_grow.img.src})`,
      badgerImg: this.resources.badger.img.src
    };
  },
  methods: {
    urlFor(source) {
      return urlBuilder.image(source);
    },
    initScrollActions() {
      let parallax = new ScrollMagic.Scene({
        triggerElement: ".grow__parallax",
        triggerHook: "onEnter",
        duration: "200%"
      })
        .setTween(".grow__bg-parallax", { y: "70%", ease: Linear.easeNone })
        .addTo(scrollController);

      let scene1 = new ScrollMagic.Scene({
        triggerElement: ".grow__container-outer",
        triggerHook: 0.8
      })
        .setClassToggle(".grow__how-we-grow-text", "active")
        //.reverse(false)
        .addTo(scrollController);

      let scene2 = new ScrollMagic.Scene({
        triggerElement: ".grow__badger",
        triggerHook: 0.6
      })
        .setClassToggle(
          ".grow__section-two, .grow__badger, .insta-img-wrapper",
          "active"
        )
        .reverse(false)
        .addTo(scrollController);
    }
  },
  mounted() {
    this.$nextTick(this.initScrollActions);
  }
};
</script>
<style lang="scss">
@import "~@/scss/grow.scss";
</style>
