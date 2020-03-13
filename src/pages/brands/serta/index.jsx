import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../../components/layout";
import MattressThumb from "../../../components/mattressList/mattThumbNail";
import MattressList from "../../../components/mattressList";

const Serta = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MattressList
        seo={datoCmsSeo.seoMetaTags}
        brandImgAlt="Logo of the Serta mattress company."
        headerText="Not just sorta comfortable, Serta comfortable."
        brandName="serta"
        landing={false}
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

Serta.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Serta;

export const sertaMattresses = graphql`
  query sertaMattresses {
    datoCmsSeo(name: { eq: "Serta Mattresses" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "serta" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;
