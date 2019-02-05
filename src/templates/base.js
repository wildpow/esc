import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
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
  Overview,
  Article,
  StyledMarkDown,
  Profile,
  MainTitle,
  InfoAnchor,
  Stuff,
} from "../styles/singleMattStyles";

const Base = ({ data }) => {
  const { AdjBases } = data.gcms;
  return (
    <Layout>
      <BreadWrapper>
        <BreadCrumbs next="Adjustable" here={AdjBases.fullName} />
      </BreadWrapper>
      <Wrapper>
        <Helmet>
          <title>{`ESC: ${AdjBases.fullName}`}</title>
          <meta name="description" content={AdjBases.baseDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="E.S.C. Mattress Center" />
          <meta
            property="og:url"
            content={`https://www.escmattresscenter.com/adjustable/${
              AdjBases.uri
            }`}
          />
          <meta
            property="og:image"
            content={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${
              AdjBases.coverImg.handle
            }`}
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="627" />
          <meta
            property="og:image:alt"
            content={`E.S.C Mattress Center | ${AdjBases.fullName}`}
          />
          <meta property="og:title" content="E.S.C Mattress Center" />
          <meta
            property="og:description"
            content={`${AdjBases.fullName} Adjustable Base`}
          />
        </Helmet>
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
        <Overview id="moreInfo">
          <h2>OVERVIEW & SPECS</h2>
        </Overview>
        <Article>
          <Description>{AdjBases.baseDescription}</Description>
          <Profile>{`Profile: ${AdjBases.height}`}</Profile>
          <StyledMarkDown source={AdjBases.keyfeatures} escapeHtml={false} />
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
