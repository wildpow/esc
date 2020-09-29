import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import MattressList from "../../components/Brands/list";

const List = ({ location, data }) => {
  const {
    beautyrestHeader,
    nectarHeader,
    poshHeader,
    sealyHeader,
    stearnsHeader,
    tempurMattress,
    sealyMattress,
  } = data;
  const allHeaders = [
    beautyrestHeader.headerLink,
    nectarHeader.headerLink,
    poshHeader.headerLink,
    sealyHeader.headerLink,
    stearnsHeader.headerLink,
    tempurMattress.headerLink,
  ];
  function sealySort(matts) {
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
      return [...golden, ...essentials, ...performance, ...premium];
    });
  }
  const sealyMatt = sealySort(sealyMattress);
  return (
    <Layout>
      <MattressList
        headers={allHeaders}
        location={location}
        tempur={tempurMattress}
        sealy={sealyMatt}
      />
    </Layout>
  );
};

export const list = graphql`
  query allMattresses {
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
  }
`;
export default List;
