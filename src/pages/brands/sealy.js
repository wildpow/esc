import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/layout";

import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import {
  MainWrapper,
  Wrapper,
  LinkWrapper,
  MainTitle,
  SealyImgPlace,
  StyledLink,
  MattImg,
  Name,
  PriceRange,
  Divy,
} from "../../styles/mattListStyles";
import SealyImg from "../../images/sealyLogo.png";
import logo from "../../images/logo.png";

const Sealy = ({ data }) => {
  const { allMattresses } = data.gcms;
  const title = "sealy";
  return (
    <Layout>
      <MainWrapper>
        <Helmet>
          <title>ESC: Sealy Mattresses</title>
          <meta
            name="description"
            content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."
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
          <meta property="og:title" content="E.S.C. Mattress Center | Sealy" />
          <meta
            property="og:description"
            content="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."
          />
        </Helmet>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
        <MainTitle>
          <SealyImgPlace
            src={SealyImg}
            alt="A logo of the Sealy mattress company"
          />
        </MainTitle>
        <Wrapper>
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Essentials") {
                return (
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
                          {`$${mattress.priceRange[0]} - 
                          $${mattress.priceRange[1]}`}
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
                );
              }
              return null;
            }
            return null;
          })}
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Performance") {
                return (
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
                          {`$${mattress.priceRange[0]} - 
                          $${mattress.priceRange[1]}`}
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
                );
              }
              return null;
            }
            return null;
          })}
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Premium ") {
                return (
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
                          {`$${mattress.priceRange[0]} - 
                          $${mattress.priceRange[1]}`}
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
                );
              }
              return null;
            }
            return null;
          })}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
      </MainWrapper>
    </Layout>
  );
};

Sealy.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Sealy;

export const allMattresses = graphql`
  query allMattresses {
    gcms {
      allMattresses(orderBy: orderByPrice_ASC, filter: { isPublished: true }) {
        brandName
        uri
        id
        subLine {
          subLineName
        }
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
