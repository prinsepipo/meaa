const { resolve } = require("path");

module.exports = {
  pathPrefix: "/meaa",
  siteMetadata: {
    title: "MEAA",
    siteUrl: "https://prinsepipo.github.io/meaa",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `
          @import "${__dirname}/src/styles/variables";
          @import "${__dirname}/src/styles/mixins";
        `,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "data",
        "path": resolve("./src/data/"),
      },
      __key: "data",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        "name": "images",
        "path": resolve("./src/images/"),
      },
      __key: "images",
    },
  ],
};
