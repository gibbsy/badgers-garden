<template>
  <div class="hero__slideshow-container">
    <transition name="slow-fade" appear mode="in-out">
      <div
        class="hero__image-slide"
        v-for="(slide, i) in slides"
        v-if="currentIndex == i"
        :class="{ ready: currentIndex == i }"
        :key="i"
        :style="{ backgroundImage: `url(${slide.img.src})` }"
      ></div>
    </transition>
  </div>
</template>
<script>
export default {
  props: ["slides", "delayStart", "interval"],
  data() {
    return {
      index: -1
    };
  },
  computed: {
    currentIndex() {
      return this.index % this.slides.length;
    }
  },
  methods: {
    start() {
      let interval = this.interval || 8000;
      this.index = 0;
      setInterval(() => {
        ++this.index;
      }, interval);
    }
  },
  mounted() {
    let delay = this.delayStart || 500;
    setTimeout(() => {
      this.start();
    }, delay);
  }
};
</script>
<style lang="scss">
@import "~@/scss/slideshow.scss";
</style>
