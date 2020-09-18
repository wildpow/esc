import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import "../styles/carousel.css";
import Layout from "../components/Layout";
import { Main } from "../styles/homeStyles";
import Front from "../components/Home/front";
// import TopThreeMatts from "../components/Home/Top3Mattress";
// import TopAccessories from "../components/Home/TopAccessories";
import TopItems from "../components/Home/TopItems";
import MattressThumbnail from "../components/MattressList/MattressThumbnail";
import AccThumb from "../components/Accessories/AccessoryList/AccThumb";

const IndexPage = ({ data }) => {
  const {
    carousel,
    topAccessoryFooter,
    topAccessoryHeader,
    topAccessoryFooterUrl,
    top3Mattress,
  } = data.datoCmsFrontPage;
  const { products } = data.shopifyCollection;
  let sources = [];
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsFrontPage.seoMetaTags} />
      <Main>
        <Carousel
          infiniteLoop
          autoPlay
          showThumbs={false}
          interval={6000}
          centerMode
          centerSlidePercentage={100}
          showStatus={false}
          dynamicHeight
          style={{ minHeight: "140px", height: "auto" }}
        >
          {carousel.map((item, index) => {
            sources = [
              item.mobileImage.fluid,
              {
                ...item.image.fluid,
                media: `(min-width: 501px)`,
              },
            ];
            return (
              <Link key={item.id} to={`${item.url}`}>
                <Img
                  fluid={sources}
                  alt={item.image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fadeIn={index !== 0}
                  imgStyle={{ minHeight: "140px", height: "auto" }}
                  style={{ minHeight: "140px", height: "auto" }}
                />
              </Link>
            );
          })}
        </Carousel>
        <Front />
        <TopItems
          headerText={top3Mattress[0].header}
          paragraph={`We believe that no mattress is a one-size-fits-all solution, which is
        why we have over 50 mattresses to choose from at our Everett location.
        If you’d like to browse our current sale mattresses you can click below,
        or visit our showroom on Everett Mall Way. With a combined 25 years of
        experience helping people find the right mattress for their sleep needs
        we’re here to help you start sleeping better.`}
          footerButtonText={top3Mattress[0].footer}
          footerButtonUrl={top3Mattress[0].footerUrl}
        >
          {top3Mattress[0].mattresses.map((mattress) => (
            <MattressThumbnail
              key={mattress.id}
              front
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </TopItems>
        <TopItems
          headerText={topAccessoryHeader}
          footerButtonText={topAccessoryFooter}
          footerButtonUrl={topAccessoryFooterUrl}
        >
          {products.map((item) => (
            <AccThumb acc={item} key={item.shopifyId} front />
          ))}
        </TopItems>
      </Main>
    </Layout>
  );
};

export const carouselQuery = graphql`
  query carousels {
    shopifyCollection(title: { eq: "Top accessories" }) {
      products {
        shopifyId
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        images {
          altText
          localFile {
            childImageSharp {
              fluid(maxWidth: 250) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
    datoCmsFrontPage {
      top3Mattress {
        footer
        footerUrl
        header
        mattresses {
          slug
          id
          name
          firmness
          images {
            coverImage {
              fluid(
                maxWidth: 250
                imgixParams: { auto: "compress", lossless: true }
              ) {
                ...GatsbyDatoCmsFluid
              }
              alt
            }
          }
          priceLow
          priceHigh
          saleInfo {
            saleBanner
          }
          subline {
            name
          }
          brand {
            urlName
            displayName
          }
        }
      }

      topAccessoryFooter
      topAccessoryHeader
      topAccessoryFooterUrl
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      carousel {
        url
        id
        mobileImage {
          alt
          fluid(
            maxWidth: 500
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
        image {
          fluid(
            maxWidth: 1440
            imgixParams: { auto: "compress", lossless: true }
          ) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          alt
        }
      }
    }
  }
`;
IndexPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default IndexPage;
