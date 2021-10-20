import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const { brands, all } = useStaticQuery(
    graphql`
      query mattressBrandHeaders {
        all: datoCmsHeader(title: { eq: "Shop All Mattresses" }) {
          title
          tagLine
          bgImg {
            title
            alt
            url
          }
        }
        brands: allDatoCmsBrand(sort: { fields: position }) {
          nodes {
            urlName
            landingPage {
              title
            }
            headerLink {
              title
              tagLine
              bgImg {
                url
                alt
                title
              }
            }
          }
        }
      }
    `
  );
  const brandHeaders = {};
  brands.nodes.forEach((element) => {
    brandHeaders[element.urlName] = element.headerLink;
    brandHeaders[element.urlName].urlName = element.urlName;

    brandHeaders[element.urlName].landing = element.landingPage !== null;
  });
  brandHeaders.all = all;
  return { brandHeaders };
};
