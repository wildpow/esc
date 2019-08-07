import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../../components/layout";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  Img,
} from "../../styles/mattListStyles";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import TempurImg from "../../images/tempurLogo2.png";
import MattressThumb from "../../components/mattThumbNail/mattThumb_NEW";

const Tempurpedic = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MainWrapper>
        <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
        <MainTitle>
          <Img src={TempurImg} alt="Logo of the Tempurpedic mattress company" />
        </MainTitle>
        <Wrapper>
          {allDatoCmsMattress.nodes.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
            />
          ))}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
      </MainWrapper>
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
