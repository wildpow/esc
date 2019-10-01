import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import ImageViewer from "../components/imageViewer";
import PriceDropDown from "../components/priceDropDown_NEW";
import {
  Wrapper,
  Main,
  MainInfo,
  Warranty,
  Description,
  Article,
  Profile,
  MainTitle,
  List,
  Construction,
  Info,
} from "../styles/singleMattStyles";

const Base = ({ data }) => {
  const { datoCmsAdjustableBase: adjBase } = data;
  return (
    <>
      <BreadWrapper>
        <BreadCrumbs next="Adjustable" here={adjBase.fullName} />
      </BreadWrapper>
      <Wrapper>
        <HelmetDatoCms seo={adjBase.seoMetaTags} />
        <header>
          <MainTitle>{adjBase.fullName}</MainTitle>
        </header>
        <Main>
          <ImageViewer
            saleBanner={adjBase.sale[0].saleBanner}
            cover={adjBase.images3[0]}
            img1={adjBase.images3[1]}
            img2={adjBase.images3[2]}
            base
          />
          <MainInfo>
            <List>
              <h3>Features</h3>
              <ul>
                {adjBase.smallFeatureList.map(item => (
                  <li key={item.id}>{item.feature}</li>
                ))}
                <Info>
                  <AnchorLink href="#moreInfo">See more details</AnchorLink>
                </Info>
              </ul>
            </List>
            <PriceDropDown
              price={adjBase.price[0]}
              discount={adjBase.sale[0].discount}
            />
          </MainInfo>
        </Main>
        <header id="moreInfo">
          <MainTitle red>OVERVIEW & SPECS</MainTitle>
        </header>
        <Article>
          <Description>{adjBase.description}</Description>
          <Profile>{`Profile: ${adjBase.height}`}</Profile>
          <Construction>
            <h3>Key Features:</h3>
            <ul>
              {adjBase.fullFeatureList.map(item => (
                <li key={item.id}>{item.feature}</li>
              ))}
            </ul>
          </Construction>
          <Warranty>{adjBase.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs next="adjustable" here={adjBase.fullName} />
      </BreadWrapper>
    </>
  );
};
Base.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Base;

export const query = graphql`
  query singleAdjustable($slug: String!) {
    datoCmsAdjustableBase(slug: { eq: $slug }) {
      slug
      fullName
      description
      images3 {
        url
        alt
      }
      warranty
      height
      price {
        twin
        twinxl
        full
        queen
        king
      }
      sale {
        saleBanner
        discount
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      smallFeatureList {
        feature
        id
      }
      fullFeatureList {
        feature
        id
      }
    }
  }
`;
