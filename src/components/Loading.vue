<template>
  <div class="loading__container">
    <div class="font_preload" style="opacity: 0; position: absolute;">
      <span style="font-family: 'xetbookbold';"></span>
      <span style="font-family: 'mixcutoutsmedium';"></span>
      <span style="font-family: 'avenir';"></span>
    </div>
    <div class="loading__icon" id="icon__ani">
      <div class="water" :class="{ active: watering }">
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
      </div>
      <div class="can">
        <img src="../assets/images/can_icon.svg" />
      </div>
    </div>
    <h2>
      Be right with you...
    </h2>
  </div>
</template>
<script>
import bus from "../scripts/bus";
export default {
  data() {
    return {
      watering: false
    };
  },
  mounted() {
    const icon = document.getElementById("icon__ani");
    const tl = new gsap.timeline()
      .to(icon, 1, { y: "-=20px" }, 0)
      .to(icon, 1, { rotate: "-70deg" }, 0.5)
      .add(() => (this.watering = true), 1.2)
      .add(() => bus.$emit("ANIMATION_PLAYED"), 3);
  }
};
</script>
<style lang="scss">
@import "~@/scss/loading.scss";
</style>
