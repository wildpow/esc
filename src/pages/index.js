import React from "react";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/layout";
import { Main, Linky } from "../styles/homeStyles";
import Front from "../components/front";
import TopThreeMatts from "../components/top3Mattresses";

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
          {carousel.map(car => (
            <Linky key={car.id} to={`${car.url}`}>
              <img src={car.image.url} alt={car.image.alt} />
            </Linky>
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
          url
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
