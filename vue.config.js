module.exports = {
  publicPath: "./",
  configureWebpack: {
    externals: {},
  },
  productionSourceMap: false,
  devServer: {
    hot: false,
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/scss/mixins.scss";
        @import "@/scss/_typo.scss";`,
      },
    },
  },
};
