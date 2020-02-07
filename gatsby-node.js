const path = require("path");
const StatsPlugin = require("stats-webpack-plugin");

exports.onCreateWebpackConfig = ({ stage, plugins, actions }) => {
  if (stage === "build-javascript") {
  }
};

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    actions.setWebpackConfig({
      // Turn off source maps
      devtool: false,
      plugins: [
        new StatsPlugin("../artifacts/webpack.json", {
          all: false,
          assets: true,
          modules: true,
          chunks: true,
        }),
      ],
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allDatoCmsAdjustableBase {
        edges {
          node {
            slug
          }
        }
      }
      allDatoCmsMattress {
        edges {
          node {
            slug
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
    actions.createPage({
      path: `/adjustable/${base.node.slug}`,

      component: path.resolve(`./src/templates/base.js`),
      context: {
        slug: base.node.slug,
      },
    });
  });
  data.allDatoCmsMattress.edges.forEach(mattress => {
    actions.createPage({
      path: `/brands/${mattress.node.brand.urlName}/${mattress.node.slug}`,
      component: path.resolve(`./src/templates/mattress.js`),
      context: {
        slug: mattress.node.slug,
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
