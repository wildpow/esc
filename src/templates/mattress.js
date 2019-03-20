import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageViewer from "../components/imageViewer";
import {
  Wrapper,
  MainTitle,
  Main,
  MainInfo,
  Article,
  Overview,
  Warranty,
  Description,
  StyledMarkDown,
  Profile,
  InfoAnchor,
  Stuff,
} from "../styles/singleMattStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import PriceCalculator from "../components/priceCalculator";
import SEO from "../components/seo";

const Mattress = ({ data }) => {
  const mattress = data.gcms.Mattress;
  const SealyBoxPrice = [125, 125, 150, 150, 250];
  const StearnsBoxPrice = [125, 125, 150, 150, 250];
  const TempurBoxPrice = [200, 200, 300, 300, 400];
  let BoxspringPrice;
  if (mattress.uriBrandName === "tempurpedic") {
    BoxspringPrice = TempurBoxPrice;
  } else if (mattress.uriBrandName === "sealy") {
    BoxspringPrice = SealyBoxPrice;
  } else {
    BoxspringPrice = StearnsBoxPrice;
  }
  return (
    <Layout>
      <SEO
        title={`ESC: ${mattress.subBrand} ${mattress.subName} Mattress`}
        description={mattress.discription}
        ogURL={`https://www.escmattresscenter.com/brands/${
          mattress.uriBrandName
        }/${mattress.uri}`}
        ogImage={`https://media.graphcms.com/resize=w:1200,h:627,fit:clip/${
          mattress.coverImg.handle
        }`}
        ogImageAlt={`E.S.C Mattress Center | ${mattress.name}`}
        ogTitle={`E.S.C. Mattress Center | ${mattress.name}`}
      />
      <BreadWrapper>
        <BreadCrumbs
          next="Brands"
          next2={mattress.uriBrandName}
          here={mattress.name}
        />
      </BreadWrapper>
      <Wrapper>
        <header>
          <MainTitle>{mattress.name}</MainTitle>
        </header>
        <Main>
          <ImageViewer
            cover={mattress.coverImg.handle}
            img1={mattress.detail1.handle}
            img2={mattress.detail2.handle}
            fullname={mattress.name}
            type="mattress"
          />
          <MainInfo>
            <Stuff>
              <StyledMarkDown source={mattress.features} escapeHtml={false} />
              <InfoAnchor href="#moreInfo">See more details</InfoAnchor>
            </Stuff>
            <PriceCalculator
              freeBoxSpring={mattress.freeBoxSpring}
              mattress={mattress.name} // For MakeOffer Component
              mattOnly={mattress.mattOnly}
              mattOnlySale={mattress.mattOnlySale}
              setPrice={mattress.setPrice}
              setPriceSale={mattress.setPriceSale}
              boxPrice={BoxspringPrice}
            />
          </MainInfo>
        </Main>
        <Overview id="moreInfo">
          <h2>OVERVIEW & SPECS</h2>
        </Overview>
        <Article>
          <Description>{mattress.discription}</Description>
          <Profile>{`Profile: ${mattress.profile}`}</Profile>
          <StyledMarkDown source={mattress.contruction} escapeHtml={false} />
          <Warranty>{mattress.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs
          next="Brands"
          next2={mattress.uriBrandName}
          here={mattress.name}
        />
      </BreadWrapper>
    </Layout>
  );
};
Mattress.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Mattress;

export const query = graphql`
  query SingleMattress($uri: String!) {
    gcms {
      Mattress(uri: $uri) {
        id
        isOnSale {
          saleName
        }
        uri
        brandName
        subName
        subBrand
        name
        freeBoxSpring
        discription
        features
        profile
        contruction
        mattOnly
        mattOnlySale
        setPrice
        setPriceSale
        warranty
        uriBrandName
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
