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
  props: ["slides"],
  data() {
    return {
      index: 0
    };
  },
  computed: {
    currentIndex() {
      return this.index % this.slides.length;
    }
  },
  mounted() {
    setInterval(() => {
      ++this.index;
    }, 7000);
  }
};
</script>
