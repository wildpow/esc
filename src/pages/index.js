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
import TopThreeMatts from "../components/Home/Top3Mattress";
import { useWindowSize } from "../context/WindowSizeContext";

const IndexPage = ({ data }) => {
  const { carousel } = data.datoCmsFrontPage;
  const { width } = useWindowSize();
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
        >
          {carousel.map((car, index) => (
            <Link key={car.id} to={`${car.url}`} style={{ maxHeight: "550px" }}>
              {width > 500 ? (
                <Img
                  fluid={car.image.fluid}
                  alt={car.image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fadeIn={index !== 0}
                />
              ) : (
                <Img
                  fluid={car.mobileImage.fluid}
                  alt={car.mobileImage.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  fadeIn={index !== 0}
                />
              )}
            </Link>
          ))}
        </Carousel>
        <Front />
        <TopThreeMatts />
      </Main>
    </Layout>
  );
};

export const carouselQuery = graphql`
  query carousels {
    datoCmsFrontPage {
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
// imgixParams: { fm: "jpg", auto: "format", lossless: true }
