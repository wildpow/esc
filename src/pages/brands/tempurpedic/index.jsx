import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattressThumb from "../../../components/mattressList/mattThumbNail";
import MattressList from "../../../components/mattressList";

const Tempurpedic = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MattressList
        seo={datoCmsSeo.seoMetaTags}
        brandImgAlt="Logo of the Tempurpedic mattress company"
        headerText="Tempurpedic life changing sleep."
        brandName="tempurpedic"
      >
        {allDatoCmsMattress.nodes.map(mattress => (
          <MattressThumb
            key={mattress.id}
            mattress={mattress}
            url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
          />
        ))}
      </MattressList>
    </Layout>
  );
};

Tempurpedic.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Tempurpedic;

export const tempurpedicMatt = graphql`
  query tempurpedic {
    datoCmsSeo(name: { eq: "tempurpedic mattresses" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "tempurpedic" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;
