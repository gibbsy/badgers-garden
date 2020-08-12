<template>
  <div class="order__container-outer">
    <div class="order__parallax parallax-container">
      <div
        class="order__bg-parallax"
        :style="{ backgroundImage: `url(${resources.garden.url})` }"
      ></div>
    </div>
    <div class="order__info">
      <h1 class="cutouts">Order now</h1>
      <p>
        For more information about what’s available, or to place your order get
        in touch by phone or email:
      </p>
      <ul class="contact-details">
        <li>
          <a href="mailto:badgerbolts@gmail.com">badgerbolts@gmail.com</a>
        </li>
        <li>
          <a href="tel:+447973489993">Call 07973 489993</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["scroller", "resources"],
  methods: {
    initScrollActions() {
      let parallax = new ScrollMagic.Scene({
        triggerElement: ".order__container-outer",
        triggerHook: "onEnter",
        duration: "200%"
      })
        .setTween(".order__bg-parallax", { y: "70%", ease: Linear.easeNone })
        .addTo(this.scroller);

      var scene1 = new ScrollMagic.Scene({
        triggerElement: ".order__container-outer",
        triggerHook: 0.6
      })
        .setClassToggle(".order__info", "active")
        .reverse(false)
        .addTo(this.scroller);
    }
  },
  mounted() {
    this.$nextTick(this.initScrollActions);
  }
};
</script>
<style lang="scss">
@import "~@/scss/orderNow.scss";
</style>
