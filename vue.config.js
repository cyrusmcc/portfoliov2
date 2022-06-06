// vue.config.js
publicPath: process.env.NODE_ENV === "production" ? "/cyrusmcchub.io.git/" : "/",
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
