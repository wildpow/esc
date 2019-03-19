import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  Img,
} from "../../styles/mattListStyles";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import TempurImg from "../../images/tempurLogo2.png";
import logo from "../../images/logo.png";
import SingleMattress from "../../components/singleMattress/singleMattress";

const Tempurpedic = ({ data }) => {
  const { allMattresses } = data.gcms;
  const title = "tempurpedic";
  return (
    <Layout>
      <MainWrapper>
        <Helmet>
          <title>ESC: Tempur-Pedic Mattresses</title>
          <meta
            name="description"
            content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center" />
          <meta
            property="og:url"
            content="https://www.escmattresscenter.com/"
          />
          <meta property="og:image" content={logo} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta
            property="og:image:alt"
            content="E.S.C Mattress Center's logo of a panda"
          />
          <meta
            property="og:title"
            content="E.S.C. Mattress Center | Tempurpedic"
          />
          <meta
            property="og:description"
            content="Tempurpedic is the most recommended brand in the US. They offer a memory foam mattress as well as their flex line, and innovative hybrid from the brand you know and love. Come see JD Power’s Consumers choice award winner for 2017."
          />
        </Helmet>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
        <MainTitle>
          <Img src={TempurImg} alt="Logo of the Tempurpedic mattress company" />
        </MainTitle>
        <Wrapper>
          {allMattresses.map(mattress => (
            <SingleMattress
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
