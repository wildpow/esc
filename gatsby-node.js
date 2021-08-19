const path = require("path");

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  // let brisa = "";
  // let premiumLeather = "";
  const { data } = await graphql(`
    query {
      xChairs: allDatoCmsXChair {
        nodes {
          title
          headrest
          chairWidth
          memoryFoam
          slug
        }
      }
      adjustables: allDatoCmsProduct(
        filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
      ) {
        nodes {
          slug
        }
      }
      products: allDatoCmsProduct(
        filter: { typeOfProduct: { title: { ne: "Adjustable" } } }
      ) {
        nodes {
          slug
        }
      }
      allDatoCmsNewMattress {
        nodes {
          slug
          shopifyAdjustableBase
          brand {
            shopify2Inch
            shopify5Inch
            shopify9Inch
            urlName
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
  data.xChairs.nodes.forEach((chair) => {
    actions.createPage({
      path: `/x-chair/${chair.slug}`,
      component: path.resolve(`src/templates/x-chair.jsx`),
      context: {
        slug: chair.slug,
        headrest: chair.headrest,
        width: chair.chairWidth,
        memoryFoam: chair.memoryFoam,
      },
    });
  });
  data.products.nodes.forEach((product) => {
    actions.createPage({
      path: `/accessories/${product.slug}`,
      component: path.resolve(`src/templates/product.jsx`),
      context: {
        slug: product.slug,
      },
    });
  });
  data.adjustables.nodes.forEach((adjustable) => {
    actions.createPage({
      path: `/adjustable/${adjustable.slug}`,
      component: path.resolve(`src/templates/product.jsx`),
      context: {
        slug: adjustable.slug,
      },
    });
  });

  data.allDatoCmsNewMattress.nodes.forEach((mattress) => {
    actions.createPage({
      path: `/brands/${mattress.brand.urlName}/${mattress.slug}`,
      component: path.resolve(`./src/templates/mattress.jsx`),
      context: {
        slug: mattress.slug,
        shopifyBase: mattress.shopifyAdjustableBase,
        shopify2Inch: mattress.brand.shopify2Inch,
        shopify5Inch: mattress.brand.shopify5Inch,
        shopify9Inch: mattress.brand.shopify9Inch,
      },
    });
  });
  const newPosts = data.allDatoCmsNewBlog.edges;
  newPosts.forEach((post, index) => {
    const prev = index === 0 ? null : newPosts[index - 1].node;
    const next =
      index === newPosts.length - 1 ? null : newPosts[index + 1].node;
    actions.createPage({
      path: `/blog/${post.node.slug}`,
      component: path.resolve(`./src/templates/blogPost.jsx`),
      context: {
        slug: post.node.slug,
        prev,
        next,
      },
    });
  });
};
// DatoCmsXChair
exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    DatoCmsXChair: {
      shopifyInfo: {
        type: [`ShopifyProduct`],
        resolve(source, args, context, info) {
          const fieldValue = source.entityPayload.attributes.shopify_connection;
          return context.nodeModel.runQuery({
            query: { filter: { storefrontId: { eq: fieldValue } } },
            type: `ShopifyProduct`,
            // firstOnly: true,
          });
        },
      },
    },
    DatoCmsNewMattress: {
      shopifyInfo: {
        type: [`ShopifyProduct`],
        resolve(source, args, context, info) {
          const fieldValue = source.entityPayload.attributes.shopify_connection;
          return context.nodeModel.runQuery({
            query: { filter: { storefrontId: { eq: fieldValue } } },
            type: `ShopifyProduct`,
            // firstOnly: true,
          });
        },
      },
    },
    DatoCmsProduct: {
      shopifyInfo: {
        type: [`ShopifyProduct`],
        resolve(source, args, context, info) {
          const fieldValue = source.entityPayload.attributes.shopify_connection;
          return context.nodeModel.runQuery({
            query: { filter: { storefrontId: { eq: fieldValue } } },
            type: `ShopifyProduct`,
            // firstOnly: true,
          });
        },
      },
    },
  });
};
