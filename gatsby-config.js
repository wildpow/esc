require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const queries = require("./src/algolia-queries");

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://www.escmattresscenter.com",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === "production";
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

const cfg = {
  siteMetadata: {
    title: "E.S.C Mattress Center",
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-webpack-bundle-analyser-v2`,
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        concurrentQueries: false,
        queries,
        enablePartialUpdates: true,
        matchFields: ["slug", "description", "objectID"],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images-datocms`,
            options: {
              linkImagesToOriginal: false,
              apiToken: process.env.DATO_API,
              maxWidth: 780,
              wrapperStyle: "margin-top: 40px; margin-bottom: 20px;",
            },
          },
          // SOURCE PLUG-INS
          {
            resolve: "gatsby-source-apiserver",
            options: {
              entitiesArray: [
                {
                  url: process.env.REST2,
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    accept: "application/json",
                    Connection: "keep-alive",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Max-Age": 3600,
                  },
                  name: `widget`,
                },
              ],
            },
          },
          {
            resolve: `gatsby-source-datocms`,
            options: {
              apiToken: process.env.DATO_API,
              preview: false,
              disableLiveReload: false,
            },
          },
          {
            resolve: "gatsby-source-shopify",
            options: {
              apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
              password: process.env.SHOPIFY_ADMIN_PASSWORD,
              storeUrl: `${process.env.GATSBY_SHOPIFY_STORE}.myshopify.com`,
            },
          },
          {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images`,
            },
          },
          {
            resolve: "gatsby-plugin-react-svg",
            options: {
              rule: {
                include: /svgs/,
              },
            },
          },
          {
            resolve: "gatsby-plugin-robots-txt",
            options: {
              resolveEnv: () => NETLIFY_ENV,
              env: {
                production: {
                  policy: [{ userAgent: "*" }],
                },
                "branch-deploy": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
                },
                "deploy-preview": {
                  policy: [{ userAgent: "*", disallow: ["/"] }],
                  sitemap: null,
                  host: null,
                },
              },
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `E.S.C Mattress Center`,
              short_name: `E.S.C`,
              start_url: `/`,
              background_color: `#ffffff`,
              theme_color: `#1565c0`,
              display: `minimal-ui`,
              icon: `src/images/squarePanda.png`, // This path is relative to the root of the site.
            },
          },
          {
            resolve: `gatsby-plugin-canonical-urls`,
            options: {
              siteUrl: `https://www.escmattresscenter.com`,
              stripQueryString: true,
            },
          },
        ],
      },
    },
  ],
};

if (process.env.NODE_ENV === "production") {
  const googleAnalyticsCfg = {
    resolve: "gatsby-plugin-google-analytics",
    options: {
      trackingId: process.env.GOOGLE_ANALYTICS,
    },
  };
  cfg.plugins.push(googleAnalyticsCfg);
}

module.exports = cfg;
