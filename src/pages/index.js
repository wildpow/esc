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

const IndexPage = ({ data }) => {
  const { carousel } = data.datoCmsFrontPage;
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
          {carousel.map((car) => (
            <Link key={car.id} to={`${car.url}`}>
              <Img fluid={car.image.fluid} alt={car.image.alt} />
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
