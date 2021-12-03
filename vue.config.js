// vue.config.js
module.exports = {
  publicPath: "/cyrusmcc.github.io/",
  devServer: {
    port: 3000,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/styles/global.scss";
            `,
      },
    },
  },
};
