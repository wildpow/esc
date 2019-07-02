const path = require("path");

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
      allDatoCmsAdjustableBase {
        edges {
          node {
            uri
            slug
          }
        }
      }
      allDatoCmsMattress {
        edges {
          node {
            slug
            uri
            brand {
              urlName
            }
          }
        }
      }
      allDatoCmsBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  data.allDatoCmsAdjustableBase.edges.forEach(base => {
    // const reg = `/(${base.node.slug})/gi`;
    actions.createPage({
      path: `/adjustable/${base.node.uri}`,
      component: path.resolve(`./src/templates/base.js`),
      context: {
        uri: base.node.uri,
      },
    });
  });
  data.allDatoCmsMattress.edges.forEach(mattress => {
    actions.createPage({
      path: `/brands/${mattress.node.brand.urlName}/${mattress.node.uri}`,
      component: path.resolve(`./src/templates/mattress.js`),
      context: {
        uri: mattress.node.uri,
      },
    });
  });
  data.allDatoCmsBlog.edges.forEach(blog => {
    actions.createPage({
      path: `/blog/${blog.node.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: blog.node.slug,
      },
    });
  });
};
