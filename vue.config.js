module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  outputDir: "dist",
  assetsDir: "static",
  transpileDependencies: ["vuetify"],
};
