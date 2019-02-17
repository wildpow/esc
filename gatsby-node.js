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
      gcms {
        allPosts(orderBy: dateAndTime_DESC, filter: { isPublished: true }) {
          id
          slug
          isPublished
          title
          dateAndTime
          content
          bottomimg {
            handle
            width
            height
          }
          coverImage {
            handle
          }
        }
        allAdjBaseses(filter: { isPublished: true }) {
          isPublished
          id
          brandName
          warranty
          brandLine
          baseDescription
          uri
          value
          height
          features
          fullName
          keyfeatures
          salePrice
          price
          coverImg {
            height
            handle
            width
          }
          detail1 {
            height
            handle
            width
          }
          detail2 {
            height
            handle
            width
          }
        }
        allMattresses(filter: { isPublished: true }) {
          isOnSale {
            saleName
          }
          id
          freeBoxSpring
          isPublished
          uri
          uriBrandName
          brandName
          subName
          subBrand
          name
          discription
          features
          profile
          contruction
          mattOnly
          mattOnlySale
          setPrice
          setPriceSale
          warranty
          coverImg {
            handle
          }
          detail1 {
            handle
          }
          detail2 {
            handle
          }
        }
      }
    }
  `);
  data.gcms.allPosts.forEach(blog => {
    actions.createPage({
      path: `/blog/${blog.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: blog.slug,
      },
    });
  });
  data.gcms.allAdjBaseses.forEach(base => {
    actions.createPage({
      path: `/adjustable/${base.uri}`,
      component: path.resolve(`./src/templates/base.js`),
      context: {
        uri: base.uri,
      },
    });
  });
  data.gcms.allMattresses.forEach(mattress => {
    actions.createPage({
      path: `/brands/${mattress.uriBrandName}/${mattress.uri}`,
      component: path.resolve(`./src/templates/mattress.js`),
      context: {
        uri: mattress.uri,
      },
    });
  });
};
