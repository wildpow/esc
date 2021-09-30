import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import propTypes from "prop-types";
import Layout from "../../components/Layout";
import AllMattressList from "../../components/ProductListing/AllMattressList";

const List = ({ location, data }) => {
  const sortedMatt = (list) =>
    list.sort(
      (a, b) =>
        Number(a.shopifyInfo[0].priceRange.minVariantPrice.amount) -
        Number(b.shopifyInfo[0].priceRange.minVariantPrice.amount)
    );
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
    return sortedMatt([...golden, ...essentials, ...performance, ...premium]);
  };
  const combinedData = {
    sealy: {
      mattresses: [...sealyMattressSort(data.sealyMattress.nodes)],
      header: data.sealyHeader.headerLink,
      checkBoxIndex: 0,
    },
    tempurpedic: {
      mattresses: sortedMatt([...data.tempurMattress.nodes]),
      header: data.tempurHeader.headerLink,
      checkBoxIndex: 2,
    },
    stearns: {
      mattresses: sortedMatt([...data.stearnsMattress.nodes]),
      header: data.stearnsHeader.headerLink,
      checkBoxIndex: 4,
    },
    nectar: {
      mattresses: sortedMatt([...data.nectarMattress.nodes]),
      header: data.nectarHeader.headerLink,
      checkBoxIndex: 5,
    },
    "posh-and-lavish": {
      mattresses: sortedMatt([...data.poshMattress.nodes]),
      header: data.poshHeader.headerLink,
      checkBoxIndex: 6,
    },
    all: {
      mattresses: sortedMatt([
        ...sealyMattressSort(data.sealyMattress.nodes),
        ...data.tempurMattress.nodes,
        ...data.stearnsMattress.nodes,
        ...data.nectarMattress.nodes,
        ...data.poshMattress.nodes,
      ]),
      header: data.all,
    },
  };

  return (
    <Layout>
      <HelmetDatoCms seo={data.seo.seoMetaTags} />
      <AllMattressList location={location} data={combinedData} />
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

    nectarMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "nectar" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }
    poshMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "posh-and-lavish" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }

    sealyMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "sealy" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }

    stearnsMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "stearns" } } }
    ) {
      nodes {
        ...newMattressList
      }
    }

    tempurMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "tempurpedic" } } }
    ) {
      nodes {
        ...newMattressList
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
    all: datoCmsHeader(title: { eq: "Shop All Mattresses" }) {
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
