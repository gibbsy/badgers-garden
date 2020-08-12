<template>
  <div id="grow" class="grow__container-outer">
    <div class="grow__parallax parallax-container">
      <div class="grow__bg-parallax" :style="{ backgroundImage: bgImg }"></div>
    </div>
    <div class="grow__how-we-grow">
      <article class="grow__how-we-grow-text" :class="{ active: section1 }">
        <h1 class="cutouts">How we grow it</h1>
        <p>
          We grow a ‘no dig’ garden, which improves soil health as your plants
          grow. It has been a revelation, thanks to the gardening guru Charles
          Dowding. We never use chemicals, pesticides or fake plant foods, we
          feed the soil with a cocktail of compost including spent hops from
          Rebellion Brewery, horse muck from down the road, wood ash, carboard.
        </p>
      </article>
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
            <a href="https://www.instagram.com/thebadgersgarden/"
              >follow @thebadgersgarden for updates</a
            >
          </li>
        </ul>
      </div>
      <div class="grow__insta">
        <div class="insta-img-wrapper">
          <img src="../assets/images/insta_1@1x.jpg" />
        </div>
        <div class="insta-img-wrapper">
          <img src="../assets/images/insta_2@1x.jpg" />
        </div>
        <div class="insta-img-wrapper">
          <img src="../assets/images/insta_3@1x.jpg" />
        </div>
      </div>
    </div>
    <div class="grow__badger">
      <img :src="badgerImg" />
    </div>
  </div>
</template>
<script>
export default {
  props: ["resources", "scroller"],
  data() {
    return {
      bgImg: `url(${this.resources.how_we_grow.img.src})`,
      badgerImg: this.resources.badger.img.src
    };
  },
  methods: {
    initScrollActions() {
      let parallax = new ScrollMagic.Scene({
        triggerElement: ".grow__parallax",
        triggerHook: "onEnter",
        duration: "200%"
      })
        .setTween(".grow__bg-parallax", { y: "70%", ease: Linear.easeNone })
        .addTo(this.scroller);

      let scene1 = new ScrollMagic.Scene({
        triggerElement: ".grow__container-outer",
        triggerHook: 0.7
      })
        .setClassToggle(".grow__how-we-grow-text", "active")
        .reverse(false)
        .addTo(this.scroller);

      let scene2 = new ScrollMagic.Scene({
        triggerElement: ".grow__badger",
        triggerHook: 0.4
      })
        .setClassToggle(
          ".grow__section-two, .grow__badger, .insta-img-wrapper",
          "active"
        )
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
@import "~@/scss/grow.scss";
</style>
