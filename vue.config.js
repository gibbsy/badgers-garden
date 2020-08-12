module.exports = {
  publicPath: "./",
  configureWebpack: {
    // Don't think this is needed
    /* externals: {
      gsap: "TweenMax",
      ScrollMagic: "ScrollMagic"
    } */
  },
  productionSourceMap: false,
  devServer: {
    hot: false
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/reset.scss";
        @import "@/scss/mixins.scss";
        @import "@/scss/typo.scss";
        @import "@/scss/animations.scss";
        @import "@/scss/transitions.scss";`
      }
    }
  }
};
