import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  Img,
} from "../../styles/mattListStyles";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import TempurImg from "../../images/tempurLogo2.png";
import SingleMattress from "../../components/singleMattress/singleMattress";
import SEO from "../../components/seo";

const Tempurpedic = ({ data }) => {
  const { allMattresses } = data.gcms;
  const title = "tempurpedic";
  return (
    <Layout>
      <MainWrapper>
        <SEO
          title="ESC: Tempur-Pedic Mattresses"
          description="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."
          ogTitle="E.S.C. Mattress Center | Tempurpedic"
        />
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
        <MainTitle>
          <Img src={TempurImg} alt="Logo of the Tempurpedic mattress company" />
        </MainTitle>
        <Wrapper>
          {allMattresses.map(mattress => (
            <SingleMattress
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${title}/${mattress.uri}`}
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

export const tempurMattresses = graphql`
  query tempurMattresses {
    gcms {
      allMattresses(
        orderBy: orderByPrice_ASC
        filter: { isPublished: true, brandName: "Tempur-PEDIC" }
      ) {
        brandName
        uri
        id
        subName
        subBrand
        priceRange
        coverImg {
          handle
        }
      }
    }
  }
`;
