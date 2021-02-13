import styled from "styled-components";
import PropTypes from "prop-types";
// import AnchorLink from "react-anchor-link-smooth-scroll";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import useMobileDetect from "../components/SingleProduct/useMobileDect";
import Layout from "../components/Layout";
import {
  Article,
  Description,
  // List,
  // Construction,
  // Info,
  Main,
  MainInfo,
  MainTitle,
  Profile,
  Warranty,
  Wrapper,
} from "../components/SingleProduct/SingleProduct.styled";
import BreadCrumbs, { BreadWrapper } from "../components/BreadCrumbs";
// import DropDown from "../components/SingleProduct/priceDropDown.mattress";
// import ShopifyDropDown from "../components/SingleProduct/priceDropdownShopify.matt";
import dateSEO from "../functions/dateSEO";
import ImageCarousel from "../components/SingleProduct/ImageCarousel";
import FirmnessScale from "../components/SingleProduct/FirmessScaleMobile";
import MattressForm from "../components/SingleProduct/MattressForm";
import { useWindowSize } from "../context/WindowSizeContext";
import FeatureList from "../components/SingleProduct/FeatureList";

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const Mattress = ({ data }) => {
  const {
    datoCmsNewMattress: mattress,
    shopifyBase,
    shopify2Inch,
    shopify5Inch,
    shopify9Inch,
  } = data;
  const detectMobile = useMobileDetect();
  const { width } = useWindowSize();
  const mergeFeatureLists = (smallList, bigList) => {
    const ids = new Set(bigList.map((d) => d.id));
    return [...bigList, ...smallList.filter((d) => !ids.has(d.id))];
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
            mattress.nameWithout
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
    "sku": "ESC${mattress.brand.urlName.toUpperCase()}.${mattress.nameWithout}",
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "highPrice": ${
          mattress.shopifyInfo[0].priceRange.maxVariantPrice.amount
        },
        "lowPrice": ${
          mattress.shopifyInfo[0].priceRange.minVariantPrice.amount
        },
        "priceValidUntil": "${dateSEO()}",
        "itemCondition": "New",
        "availability": "InStock",
        "offerCount": "${
          Object.values(mattress.shopifyInfo[0].variants).filter(
            (value) => value !== 0,
          ).length
        }"

    }
}
        `}
        </script>
      </HelmetDatoCms>
      <div style={{ paddingLeft: "5px", paddingRight: "5px" }}>
        <BreadWrapper>
          <BreadCrumbs
            next="Brands"
            next2={mattress.brand.urlName}
            here={`${mattress.subline.name} ${mattress.nameWithout}`}
          />
        </BreadWrapper>
        <Wrapper>
          <header>
            <MainTitle>
              {`${mattress.brand.displayName} ${mattress.subline.name} ${mattress.nameWithout}`}
            </MainTitle>
          </header>
          <Main>
            <LeftSide>
              <ImageCarousel
                isMobile={detectMobile.isMobile()}
                cover={mattress.images[0].coverImage}
                img1={mattress.images[0].image2}
                img2={mattress.images[0].image3}
                saleBanner={
                  mattress.saleBanner.length > 3 ? mattress.saleBanner : ""
                }
                mattName={`${mattress.brand.displayName} ${mattress.nameWithout}`}
                firmness={mattress.firmness}
              />
              {detectMobile.isMobile() && (
                <FirmnessScale firmness={mattress.firmness} />
              )}
            </LeftSide>
            <MainInfo>
              {width > 767 && (
                <FeatureList
                  top
                  list={mattress.topSmallFeatureList}
                  width={width}
                />
              )}
              <MattressForm
                variants={mattress.shopifyInfo[0].variants}
                priceMin={
                  mattress.shopifyInfo[0].priceRange.minVariantPrice.amount
                }
                priceMax={
                  mattress.shopifyInfo[0].priceRange.maxVariantPrice.amount
                }
                matt
                maxQty={4}
                boxVariants={[shopify2Inch, shopify5Inch, shopify9Inch]}
                shopifyBase={shopifyBase}
              />
            </MainInfo>
          </Main>
          <header id="moreInfo">
            <MainTitle red>OVERVIEW & SPECS</MainTitle>
          </header>
          <Article>
            <Description>{mattress.description}</Description>
            <Profile>{`Profile: ${mattress.profile}"`}</Profile>
            {width < 767 ? (
              <FeatureList
                list={mergeFeatureLists(
                  mattress.topSmallFeatureList,
                  mattress.bottomFeatureList,
                )}
                width={width}
              />
            ) : (
              <FeatureList list={mattress.bottomFeatureList} width={width} />
            )}
            <Warranty>{mattress.warrantyTitle}</Warranty>
          </Article>
        </Wrapper>
        <BreadWrapper>
          <BreadCrumbs
            next="Brands"
            next2={mattress.brand.urlName}
            here={`${mattress.subline.name} ${mattress.nameWithout}`}
          />
        </BreadWrapper>
      </div>
    </Layout>
  );
};
Mattress.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Mattress;

export const query = graphql`
  query singleMattress(
    $slug: String!
    $shopifyBase: String!
    $shopify2Inch: String!
    $shopify5Inch: String!
    $shopify9Inch: String!
  ) {
    shopifyBase: shopifyProduct(shopifyId: { eq: $shopifyBase }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify2Inch: shopifyProduct(shopifyId: { eq: $shopify2Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify5Inch: shopifyProduct(shopifyId: { eq: $shopify5Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    shopify9Inch: shopifyProduct(shopifyId: { eq: $shopify9Inch }) {
      title
      vendor
      shopifyId
      variants {
        compareAtPrice
        price
        title
        shopifyId
      }
    }
    datoCmsNewMattress(slug: { eq: $slug }) {
      nameWithout
      firmness
      slug
      description
      profile
      saleBanner
      warrantyTitle
      subline {
        name
      }
      brand {
        urlName
        displayName
      }
      topSmallFeatureList {
        id
        title
        description
      }
      bottomFeatureList {
        id
        title
        description
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
      shopifyInfo {
        title
        vendor
        shopifyId
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        variants {
          compareAtPrice
          price
          title
          shopifyId
        }
      }
    }
  }
`;
