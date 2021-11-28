// vue.config.js
module.exports = {
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
