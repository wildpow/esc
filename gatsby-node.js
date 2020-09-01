const path = require("path");
// const StatsPlugin = require("stats-webpack-plugin");
// const WebpackMonitor = require("webpack-monitor");
// ONLY IN DEV MODE!!!!! ADDS A LOT OF TIME TO PRODUCTION BUILDS
// exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
//   if (stage === "build-javascript") {
//     actions.setWebpackConfig({
//       devtool: false,
//       plugins: [
//         new WebpackMonitor({
//           capture: true, // -> default 'true'
//           target: "../monitor/myStatsStore.json", // default -> '../monitor/stats.json'
//           launch: true, // -> default 'false'
//           port: 3030, // default -> 8081
//           excludeSourceMaps: true, // default 'true'
//         }),
//       ],
//     });
//   }
// };
// new StatsPlugin("../artifacts/webpack.json", {
//   all: false,
//   assets: true,
//   modules: true,
//   chunks: true,
// }),

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      protector: allShopifyProduct(
        filter: { productType: { eq: "Protector" } }
      ) {
        nodes {
          handle
          shopifyId
        }
      }
      sheets: allShopifyProduct(filter: { productType: { eq: "Sheets" } }) {
        nodes {
          handle
          shopifyId
        }
      }
      pillow: allShopifyProduct(filter: { productType: { eq: "Pillow" } }) {
        nodes {
          handle
          shopifyId
        }
      }
      allDatoCmsAdjustableBase {
        edges {
          node {
            shopifyLink
            slug
          }
        }
      }
      allDatoCmsMattress {
        edges {
          node {
            slug
            adjBaseShop
            shopMattConnection
            brand {
              shopify2Inch
              shopify5Inch
              shopify9Inch
              urlName
            }
          }
        }
      }
      allDatoCmsBlog {
        edges {
          node {
            blogListImage {
              alt
              url
            }
            slug
            title
          }
        }
      }
      allDatoCmsNewBlog {
        edges {
          node {
            excerptImage {
              alt
              url
            }
            slug
            title
          }
        }
      }
    }
  `);
  data.protector.nodes.forEach((pro) => {
    actions.createPage({
      path: `/accessories/${pro.handle}`,
      component: path.resolve(`src/templates/accessory.jsx`),
      context: {
        id: pro.shopifyId,
      },
    });
  });
  data.sheets.nodes.forEach((sheet) => {
    actions.createPage({
      path: `/accessories/${sheet.handle}`,
      component: path.resolve(`src/templates/accessory.jsx`),
      context: {
        id: sheet.shopifyId,
      },
    });
  });
  data.pillow.nodes.forEach((pill) => {
    actions.createPage({
      path: `/accessories/${pill.handle}`,
      component: path.resolve(`src/templates/accessory.jsx`),
      context: {
        id: pill.shopifyId,
      },
    });
  });
  data.allDatoCmsAdjustableBase.edges.forEach((base) => {
    actions.createPage({
      path: `/adjustable/${base.node.slug}`,

      component: path.resolve(`./src/templates/base.js`),
      context: {
        slug: base.node.slug,
        shopifyBase: base.node.shopifyLink,
      },
    });
  });
  data.allDatoCmsMattress.edges.forEach((mattress) => {
    actions.createPage({
      path: `/brands/${mattress.node.brand.urlName}/${mattress.node.slug}`,
      component: path.resolve(`./src/templates/mattress.js`),
      context: {
        slug: mattress.node.slug,
        shopifyBase: mattress.node.adjBaseShop,
        shopifyMatt: mattress.node.shopMattConnection,
        shopify2Inch: mattress.node.brand.shopify2Inch,
        shopify5Inch: mattress.node.brand.shopify5Inch,
        shopify9Inch: mattress.node.brand.shopify9Inch,
      },
    });
  });
  const posts = data.allDatoCmsBlog.edges;
  const newPosts = data.allDatoCmsNewBlog.edges;

  posts.forEach((post, index) => {
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    });
  });
  newPosts.forEach((post, index) => {
    const prev = index === 0 ? null : newPosts[index - 1].node;
    const next =
      index === newPosts.length - 1 ? null : newPosts[index + 1].node;
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve(`./src/templates/newpost.js`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    });
  });
};
