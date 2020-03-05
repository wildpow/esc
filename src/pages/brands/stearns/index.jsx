import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattressThumb from "../../../components/mattressList/mattThumbNail";
import MattressList from "../../../components/mattressList";
import Filtering from "../../../components/mattressList/filtering";
import NewTest from "../../../components/mattressList/NewTest";

const Stearns = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MattressList
        seo={datoCmsSeo.seoMetaTags}
        brandImgAlt="Logo of the Stearns and Foster mattress company."
        headerText="Stearns uncover exceptional."
        brandName="stearns"
      >
        {/* {allDatoCmsMattress.nodes.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))} */}
        {/* <Filtering mattresses={allDatoCmsMattress.nodes} /> */}
        <NewTest mattresses={allDatoCmsMattress.nodes} />
      </MattressList>
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
