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
        prependData: `@import "@/scss/mixins.scss";`,
      },
    },
  },
};
