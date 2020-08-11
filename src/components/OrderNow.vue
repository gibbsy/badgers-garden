<template>
  <div
    class="order__container-outer fade-in"
    :style="{ backgroundImage: `url(${resources.garden.url})` }"
  >
    <div class="order__info">
      <h1 class="cutouts">Order now</h1>
      <p>
        For more information about what’s available, or toplace your order get
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
      let component = this;
      let el = document.querySelector(".order__container-outer");
      console.log(el);
      var scene1 = new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.6
      })
        .setClassToggle(el, "active")
        .reverse(false)
        .addTo(this.scroller);
      var scene2 = new ScrollMagic.Scene({
        triggerElement: el,
        triggerHook: 0.6
      })
        .setClassToggle(el, "active")
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
