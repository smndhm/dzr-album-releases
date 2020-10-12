module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/dzr-album-releases/" : "/",
  pwa: {
    name: "Deezer Album Releases",
    themeColor: "#000000",
    msTileColor: "#000000"
  }
};
