module.exports = {
  siteMetadata: {
    title: `meaa`,
    siteUrl: `https://www.yourdomain.tld`,
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
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images",
    },
  ],
};
