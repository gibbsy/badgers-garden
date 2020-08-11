<template>
  <div id="grow" class="grow__container-outer">
    <div
      class="grow__how-we-grow fade-in"
      :class="{ active: section1 }"
      :style="{ backgroundImage: bgImg }"
    >
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
    <div class="grow__badger" :class="{ active: section2 }">
      <img :src="badgerImg" />
    </div>
    <div class="grow__section-two fade-in" :class="{ active: section2 }">
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
        <div class="insta-img-wrapper" :class="{ active: section2 }">
          <img src="../assets/images/insta_1@1x.jpg" />
        </div>
        <div class="insta-img-wrapper" :class="{ active: section2 }">
          <img src="../assets/images/insta_2@1x.jpg" />
        </div>
        <div class="insta-img-wrapper" :class="{ active: section2 }">
          <img src="../assets/images/insta_3@1x.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["resources", "scroller"],
  data() {
    return {
      bgImg: `url(${this.resources.how_we_grow.img.src})`,
      badgerImg: this.resources.badger.img.src,
      section1: false,
      section2: false
    };
  },
  methods: {
    initScrollActions() {
      console.log(this.scroller);
      let component = this;
      var scene1 = new ScrollMagic.Scene({
        triggerElement: ".grow__container-outer",
        triggerHook: 0.9
      })
        .on("start", function(e) {
          component.section1 = true;
        })
        .addTo(this.scroller);
      var scene2 = new ScrollMagic.Scene({
        triggerElement: ".grow__badger",
        triggerHook: 0.5
      })
        .on("start", function(e) {
          component.section2 = true;
        })
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
