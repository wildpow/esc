import React from "react";
import PropTypes from "prop-types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ImageViewer from "../components/imageViewer";
import {
  Article,
  Description,
  List,
  Construction,
  Info,
  Main,
  MainInfo,
  MainTitle,
  Profile,
  Warranty,
  Wrapper,
} from "../styles/singleMattStyles";
import BreadCrumbs, { BreadWrapper } from "../components/breadCrumbs";
import DropDown from "../components/priceDropDown_NEWMATT";

const Mattress = ({ data }) => {
  const { datoCmsMattress: mattress } = data;
  const dateSEO = () => {
    const today = new Date();
    const dd = today.getDate();
    let y = today.getFullYear();
    let mm = today.getMonth() + 1;
    if (mm + 1 === 13) {
      y += 1;
      mm = 1;
    } else {
      mm += 1;
    }

    return `${y}-${mm}-${dd}`;
  };
  return (
    <Layout>
      <HelmetDatoCms seo={mattress.seoMetaTags}>
        <script type="application/ld+json">
          {`

        {
    "@context": "http://schema.org/",
    "@type": "Product",
    "name": "${mattress.brand.displayName} ${mattress.subline.name} ${
            mattress.name
          }",
    "url": "https://www.escmattresscenter.com/brands/${
      mattress.brand.urlName
    }/${mattress.slug}",
    "image": "${mattress.images[0].coverImage.url}",
    "description": "${mattress.description}",
    "brand": {
        "@type": "Brand",
        "name": "${mattress.brand.displayName}"
    },
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": "${mattress.priceHigh}",
        "lowPrice": "${mattress.priceLow}",
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock"
    }
}
        `}
        </script>
      </HelmetDatoCms>
      <BreadWrapper>
        <BreadCrumbs
          next="Brands"
          next2={mattress.brand.urlName}
          here={`${mattress.subline.name} ${mattress.name}`}
        />
      </BreadWrapper>
      <Wrapper>
        <header>
          <MainTitle>
            {`${mattress.brand.displayName} ${mattress.subline.name} ${mattress.name}`}
          </MainTitle>
        </header>
        <Main>
          <ImageViewer
            cover={mattress.images[0].coverImage}
            img1={mattress.images[0].image2}
            img2={mattress.images[0].image3}
            saleBanner={mattress.saleInfo[0].saleBanner}
            mattName={`${mattress.brand.displayName} ${mattress.name}`}
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
            <DropDown
              typeOfDiscount={mattress.saleInfo[0].typeOfDiscount}
              freeBoxSpring={mattress.saleInfo[0].freeBox}
              discount={mattress.saleInfo[0].discount}
              prices={mattress.price[0]}
              boxPrices={mattress.brand.boxPrice[0]}
              mattress={mattress.name}
            />
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
          here={`${mattress.subline.name} ${mattress.name}`}
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
  query SingleMattress($slug: String!) {
    datoCmsMattress(slug: { eq: $slug }) {
      priceLow
      priceHigh
      slug
      name
      id
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
        typeOfDiscount
        freeBox
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
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          url
        }
        image2 {
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
          alt
          url
        }
        image3 {
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid
          }
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
