import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import ImageViewer from "../components/imageViewer";
import DropDown from "../components/dropDown";
import {
  Wrapper,
  Main,
  MainInfo,
  PriceWrapper,
  Price,
  PriceTitle,
  Warranty,
  Description,
  Article,
  StyledMarkDown,
  Profile,
  MainTitle,
  InfoAnchor,
  Stuff,
  Construction,
} from "../styles/singleMattStyles";
import SEO from "../components/seo";

const Base = ({ data }) => {
  const { AdjBases } = data.gcms;
  return (
    <Layout>
      <BreadWrapper>
        <BreadCrumbs next="Adjustable" here={AdjBases.fullName} />
      </BreadWrapper>
      <Wrapper>
        <SEO
          title={`ESC: ${AdjBases.fullName}`}
          description={AdjBases.baseDescription}
          ogURL={`https://www.escmattresscenter.com/adjustable/${AdjBases.uri}`}
          ogImage={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${
            AdjBases.coverImg.handle
          }`}
          ogImageAlt={`E.S.C Mattress Center | ${AdjBases.fullName}`}
        />
        <header>
          <MainTitle>{AdjBases.fullName}</MainTitle>
        </header>
        <Main>
          <ImageViewer
            cover={AdjBases.coverImg.handle}
            img1={AdjBases.detail1.handle}
            img2={AdjBases.detail2.handle}
            type="adjustable base without mattress"
            fullname={AdjBases.fullName}
            base
          />
          <MainInfo>
            <Stuff>
              <StyledMarkDown source={AdjBases.features} escapeHtml={false} />
              <InfoAnchor href="#moreInfo">See more details</InfoAnchor>
            </Stuff>
            <PriceWrapper>
              <Price>
                <PriceTitle>Base Price</PriceTitle>
                <DropDown data={AdjBases.price} data2={AdjBases.salePrice} />
              </Price>
            </PriceWrapper>
          </MainInfo>
        </Main>
        <header id="moreInfo">
          <MainTitle red>OVERVIEW & SPECS</MainTitle>
        </header>
        <Article>
          <Description>{AdjBases.baseDescription}</Description>
          <Profile>{`Profile: ${AdjBases.height}`}</Profile>
          <Construction source={AdjBases.keyfeatures} escapeHtml={false} />
          <Warranty>{AdjBases.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs next="adjustable" here={AdjBases.fullName} />
      </BreadWrapper>
    </Layout>
  );
};
Base.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Base;

export const query = graphql`
  query SingleAjustableQuery($uri: String!) {
    gcms {
      AdjBases(uri: $uri) {
        id
        uri
        fullName
        keyfeatures
        features
        price
        salePrice
        brandLine
        brandName
        baseDescription
        height
        warranty
        coverImg {
          handle
        }
        detail1 {
          handle
        }
        detail2 {
          handle
        }
      }
    }
  }
`;
