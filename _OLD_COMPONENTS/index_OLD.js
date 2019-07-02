import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/layout";
import { Main, Linky } from "../styles/homeStyles";
import Front from "../components/front";
import TopThreeMatts from "../components/top3Mattresses";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { allCarousels } = data.gcms;
  return (
    <Layout>
      <SEO
        title="E.S.C. Mattress Center"
        description="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."
        ogTitle="E.S.C. Mattress Center"
      />
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
          {allCarousels.map(car => (
            <Linky key={car.id} to={`${car.url}`}>
              <img
                src={`https://media.graphcms.com/resize=w:980,h:450,fit:clip/${
                  car.image.handle
                }`}
                alt={car.altTextForImage}
              />
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
    gcms {
      allCarousels(orderBy: orderofImages_ASC) {
        orderofImages
        altTextForImage
        url
        id
        image {
          handle
          width
          height
        }
      }
    }
  }
`;
IndexPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default IndexPage;
