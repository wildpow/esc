import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  StearnsImgPlaceHolder,
} from "../../../styles/mattListStyles";
import Layout from "../../../components/layout";
import StearnsImg from "../../../images/stearnsLogo.png";
import BreadCrumbs, { BreadWrapper } from "../../../components/breadCrumbs";
import MattressThumb from "../../../components/mattThumbNail/mattThumb";

const Stearns = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
      <MainWrapper>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Stearns" />
        </BreadWrapper>
        <MainTitle>
          <StearnsImgPlaceHolder
            src={StearnsImg}
            alt="Logo of the Stearns and Foster mattress company"
          />
        </MainTitle>
        <Wrapper>
          {allDatoCmsMattress.nodes.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="stearns" />
        </BreadWrapper>
      </MainWrapper>
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
