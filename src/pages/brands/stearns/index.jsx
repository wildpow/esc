import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattressThumb from "../../../components/mattressList/mattThumbNail";
import MattressList from "../../../components/mattressList";
import MattListCurrentSale from "../../../components/mattressList/currentSale";
import test3 from "../../../images/new/test3.jpg";
import test4 from "../../../images/new/test4.jpg";
import test5 from "../../../images/new/test5.jpg";
import test2 from "../../../images/new/test2.jpg";
import test from "../../../images/new/test.jpg";

const Stearns = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      {/* <MattressList
        seo={datoCmsSeo.seoMetaTags}
        brandImgAlt="Logo of the Stearns and Foster mattress company."
        headerText="Stearns uncover exceptional."
        brandName="stearns"
      >
        {allDatoCmsMattress.nodes.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))}
      </MattressList> */}
      <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
      <MattListCurrentSale
        headerBG={test}
        mattresses={allDatoCmsMattress.nodes}
        title="Stearns & Foster"
        description="Stearns uncover exceptional."
        breadCrumbs
        brandName="stearns"
        landing
      />
    </Layout>
  );
};

Stearns.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Stearns;

export const stearnsMattresses = graphql`
  query stearnsMattresses {
    datoCmsSeo(name: { eq: "stearns mattresses" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "stearns" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;
