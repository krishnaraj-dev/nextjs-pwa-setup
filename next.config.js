require("dotenv").config()
const webpack = require("webpack")
const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")
const withImages = require("next-images")
const withFonts = require("next-fonts")

const nextConfig = {
  // assetPrefix: process.env.ASSET_PREFIX,
  // exportPathMap: async function(
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     "/": { page: "/home" },
  //   };
  // },
  webpack: function (config) {
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))
    return config
  },
}

module.exports = withPlugins(
  [
    [withImages],
    [withPWA],
    [withFonts],
    {
      pwa: {
        dest: "public",
        disable: process.env.NODE_ENV === "development",
      },
    },
  ],
  nextConfig
)
