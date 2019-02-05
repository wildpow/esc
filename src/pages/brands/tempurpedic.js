import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../../components/layout";
import {
  MainWrapper,
  Wrapper,
  LinkWrapper,
  MainTitle,
  Img,
  StyledLink,
  MattImg,
  Name,
  PriceRange,
  Divy,
} from "../../styles/mattListStyles";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import TempurImg from "../../images/tempurLogo2.png";
import logo from "../../images/logo.png";

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
            <LinkWrapper key={mattress.id}>
              <StyledLink to={`/brands/${title}/${mattress.uri}`}>
                <Divy>
                  <MattImg
                    src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
                      mattress.coverImg.handle
                    }`}
                    alt={`Image of a ${mattress.brandName} ${
                      mattress.subBrand
                    } ${mattress.subName} mattress`}
                  />
                  <PriceRange>
                    {`$${mattress.priceRange[0]}
                     - $${mattress.priceRange[1]}`}
                  </PriceRange>
                </Divy>
                <Name>
                  {mattress.brandName}
                  <br />
                  {mattress.subBrand}
                  <br />
                  {mattress.subName}
                </Name>
              </StyledLink>
            </LinkWrapper>
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
