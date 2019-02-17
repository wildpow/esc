require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl: `https://www.escmattresscenter.com`,
  },
  plugins: [
    `gatsby-plugin-webpack-size`,
    // {
    //   resolve: `gatsby-source-graphcms`,
    //   options: {
    //     endpoint: process.env.GATSBY_API_URL,
    //     query: require("./gatsby/configQuery"),
    //   },
    // },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // The top level query type, can be anything you want!
        typeName: "GCMS",
        // The field you'll query against, can also be anything you want.
        fieldName: "gcms",
        // Your API endpoint, available from the dashboard and settings window.
        url: process.env.GATSBY_API_URL,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `E.S.C Mattress Center`,
        short_name: `E.S.C`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#1565c0`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
};
