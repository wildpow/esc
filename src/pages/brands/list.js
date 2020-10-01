import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import MattressList from "../../components/Brands/list";

const List = ({ location, data }) => {
  const sealySort = (matts) => {
    const golden = [];
    const essentials = [];
    const performance = [];
    const premium = [];
    matts.nodes.map((matt) => {
      if (matt.subline.name === "Golden Elegance") golden.push(matt);
      if (matt.subline.name.includes("Essentials")) essentials.push(matt);
      if (matt.subline.name.includes("Performance")) performance.push(matt);
      if (matt.subline.name.includes("Posturepedic Plus"))
        performance.push(matt);
      if (matt.subline.name.includes("Premium")) premium.push(matt);

      const nodes = [...golden, ...essentials, ...performance, ...premium];
      console.log(nodes);
      return nodes;
    });
  };
  const sealyMatt = sealySort(data.sealyMattress);
  const combinedData = {
    sealy: {
      sealyMatt,
      header: data.sealyHeader.headerLink,
    },
    beautyrest: {
      ...data.beautyrestMattress,
      header: data.beautyrestHeader.headerLink,
    },
    tempur: {
      ...data.tempurMattress,
      header: data.tempurHeader.headerLink,
    },
    serta: {
      ...data.sertaMattress,
      header: data.sertaHeader.headerLink,
    },
    stearns: {
      ...data.stearnsMattress,
      header: data.stearnsHeader.headerLink,
    },
    nectar: {
      ...data.nectarMattress,
      header: data.nectarHeader.headerLink,
    },
    posh: {
      ...data.poshMattress,
      header: data.poshHeader.headerLink,
    },
  };

  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      {console.log(sealyMatt)}
      <MattressList location={location} data={combinedData} />
    </Layout>
  );
};

export const list = graphql`
  query allMattresses {
    seo: datoCmsSeo(name: { eq: "brands" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    beautyrestHeader: datoCmsBrand(urlName: { eq: "beautyrest" }) {
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
    beautyrestMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "beautyrest" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    nectarHeader: datoCmsBrand(urlName: { eq: "nectar" }) {
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
    nectarMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "nectar" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    poshHeader: datoCmsBrand(urlName: { eq: "posh-and-lavish" }) {
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
    poshMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "posh-and-lavish" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    sealyHeader: datoCmsBrand(urlName: { eq: "sealy" }) {
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

    sealyMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "sealy" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    stearnsHeader: datoCmsBrand(urlName: { eq: "stearns" }) {
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
    stearnsMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "stearns" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    tempurHeader: datoCmsBrand(urlName: { eq: "tempurpedic" }) {
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
    tempurMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "tempurpedic" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    sertaMattress: allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "serta" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    sertaHeader: datoCmsBrand(urlName: { eq: "serta" }) {
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
`;

List.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  location: propTypes.instanceOf(Object).isRequired,
};
export default List;
