import React from "react";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageViewer from "../components/imageViewer";
import {
  Wrapper,
  MainTitle,
  Main,
  MainInfo,
  Article,
  Warranty,
  Description,
  // StyledMarkDown,
  Profile,
  // InfoAnchor,
  // Stuff,
  // Construction,
} from "../styles/singleMattStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import DropDown from "../components/priceDropDown_NEWMATT";

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${props => props.theme.MainFont3};
  font-weight: 400;
  margin-left: 5px;
  color: ${props => props.theme.newColor2};
  padding: 0px;
  h3 {
    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0;
    border-bottom: 4px solid ${props => props.theme.mainColor2};
    padding-bottom: 2px;
    padding-left: 20px;
  }
  ul {
    list-style: square;
    margin-top: 2px;
    font-size: 0.7rem;
    padding-left: 20px;
    margin-bottom: 5px;
  }
  ul li {
    padding-bottom: 2px;
  }

  @media (min-width: 360px) {
    ul {
      margin-top: 10px;
    }
  }

  @media (min-width: 550px) {
    padding: 0px 0px 0px 10px;
    h3 {
      font-size: 1.8rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${props => props.theme.mainColor2};
      padding-bottom: 2px;
      padding-left: 20px;
    }
    ul {
      list-style: square;
      margin-top: 10px;
      font-size: 1rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 992px) {
    padding: 0px 30px 10px 30px;

    h3 {
      padding-left: 20px;
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
    ul {
      margin-top: 10px;
      font-size: 1.8rem;
    }
    ul li {
      padding-bottom: 2px;
      font-size: 1.8rem;
    }
  }

  @media (min-width: 1300px) {
    h3 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 2.1rem;
    }
  }

  @media print {
    h3 {
      font-size: 1.3rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

const Construction = styled(List)`
  @media (min-width: 992px) {
    h3 {
      font-size: 1.8rem;
    }
    ul {
      font-size: 1.6rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 1300px) {
    h3 {
      font-weight: 700;
      font-size: 1.8rem;
    }
  }
`;

const Info = styled.li`
  padding-top: 10px;
  list-style: none;
  a {
    display: none;
    font-size: 0.9rem;
    font-family: ${props => props.theme.MainFont1};
    font-weight: 700;
    letter-spacing: 0.05rem;
    color: ${props => props.theme.mainColor2};
    &:hover {
      color: ${props => props.theme.mainColor1};
    }
    @media (orientation: landscape) {
      display: block;
    }
    @media (min-width: 568px) {
      font-size: 1rem;
    }
    @media (min-width: 768px) {
      display: block;
      font-size: 1.2rem;
    }
    @media (min-width: 1024px) {
      font-size: 1.6rem;
    }
    @media print {
      display: none;
    }
  }
`;

const Mattress = ({ data }) => {
  const { datoCmsMattress: mattress } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={mattress.seoMetaTags} />
      <BreadWrapper>
        <BreadCrumbs
          next="Brands"
          next2={mattress.brand.urlName}
          here={mattress.name}
        />
      </BreadWrapper>
      <Wrapper>
        <header>
          <MainTitle>{mattress.name}</MainTitle>
        </header>
        <Main>
          <ImageViewer
            cover={mattress.images[0].coverImage}
            img1={mattress.images[0].image2}
            img2={mattress.images[0].image3}
            saleBanner={mattress.saleInfo[0].saleBanner}
          />
          <MainInfo>
            <List>
              <h3>Features</h3>
              <ul>
                {mattress.listFeature.map(item => (
                  <li key={item.id}>{item.feature}</li>
                ))}
                <Info>
                  <AnchorLink href="#moreInfo">See more details</AnchorLink>
                </Info>
              </ul>
            </List>
            {console.log(mattress)}
            <DropDown
              freeBoxSpring={mattress.freeBox}
              discount={mattress.saleInfo[0].discount}
              prices={mattress.price[0]}
              boxPrices={mattress.brand.boxPrice[0]}
              mattress={mattress.name}
            />
            {/* <PriceCalculator
              freeBoxSpring={mattress.freeBoxSpring}
              mattress={mattress.name} // For MakeOffer Component
              mattOnly={mattress.mattOnly}
              mattOnlySale={mattress.mattOnlySale}
              setPrice={mattress.setPrice}
              setPriceSale={mattress.setPriceSale}
              boxPrice={BoxspringPrice}
            /> */}
          </MainInfo>
        </Main>
        <header id="moreInfo">
          <MainTitle red>OVERVIEW & SPECS</MainTitle>
        </header>
        <Article>
          <Description>{mattress.description}</Description>
          <Profile>{`Profile: ${mattress.profile}`}</Profile>
          <Construction>
            <h3>Key Features:</h3>
            <ul>
              {mattress.construction.map(item => (
                <li key={item.id}>{item.feature}</li>
              ))}
            </ul>
          </Construction>
          <Warranty>{mattress.warranty}</Warranty>
        </Article>
      </Wrapper>
      <BreadWrapper>
        <BreadCrumbs
          next="Brands"
          next2={mattress.brand.urlName}
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
    datoCmsMattress(uri: { eq: $uri }) {
      name
      id
      freeBox
      description
      profile
      warranty
      listFeature {
        feature
        id
      }
      construction {
        feature
        id
      }
      saleInfo {
        saleBanner
        discount
      }
      price {
        twin
        twinxl
        full
        queen
        king
      }
      images {
        coverImage {
          alt
          url
        }
        image2 {
          alt
          url
        }
        image3 {
          alt
          url
        }
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      subline {
        name
      }
      brand {
        displayName
        urlName
        boxPrice {
          twin
          twinxl
          full
          queen
          king
        }
      }
    }
  }
`;
