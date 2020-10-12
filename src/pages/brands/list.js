import React from "react";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import MattressList from "../../components/Brands/list";

const List = ({ location, data }) => {
  const sealyMattressSort = (matts) => {
    const golden = [];
    const essentials = [];
    const performance = [];
    const premium = [];
    matts.forEach((element) => {
      if (element.subline.name === "Golden Elegance") golden.push(element);
      if (element.subline.name.includes("Essentials")) essentials.push(element);
      if (element.subline.name.includes("Performance"))
        performance.push(element);
      if (element.subline.name.includes("Posturepedic Plus"))
        performance.push(element);
      if (element.subline.name.includes("Premium")) premium.push(element);
    });
    return [...golden, ...essentials, ...performance, ...premium];
  };
  const combinedData = {
    sealy: {
      mattresses: [...sealyMattressSort(data.sealyMattress.nodes)],
      header: data.sealyHeader.headerLink,
      checkBoxIndex: 0,
    },
    beautyrest: {
      mattresses: [...data.beautyrestMattress.nodes],
      header: data.beautyrestHeader.headerLink,
      checkBoxIndex: 1,
    },
    tempurpedic: {
      mattresses: [...data.tempurMattress.nodes],
      header: data.tempurHeader.headerLink,
      checkBoxIndex: 2,
    },
    serta: {
      mattresses: [...data.sertaMattress.nodes],
      header: data.sertaHeader.headerLink,
      checkBoxIndex: 3,
    },
    stearns: {
      mattresses: [...data.stearnsMattress.nodes],
      header: data.stearnsHeader.headerLink,
      checkBoxIndex: 4,
    },
    nectar: {
      mattresses: [...data.nectarMattress.nodes],
      header: data.nectarHeader.headerLink,
      checkBoxIndex: 5,
    },
    "posh-and-lavish": {
      mattresses: [...data.poshMattress.nodes],
      header: data.poshHeader.headerLink,
      checkBoxIndex: 6,
    },
    all: {
      mattresses: [
        ...sealyMattressSort(data.sealyMattress.nodes),
        ...data.beautyrestMattress.nodes,
        ...data.tempurMattress.nodes,
        ...data.sertaMattress.nodes,
        ...data.stearnsMattress.nodes,
        ...data.nectarMattress.nodes,
        ...data.poshMattress.nodes,
      ],
      header: data.all,
    },
  };

  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
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
    all: datoCmsHeader(title: { eq: "AllMattressSort" }) {
      title
      tagLine
      bgImg {
        title
        alt
        url
      }
    }
  }
`;

List.propTypes = {
  data: propTypes.instanceOf(Object).isRequired,
  location: propTypes.instanceOf(Object).isRequired,
};
export default List;
