import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/layout";
import { Main, Linky } from "../styles/homeStyles";
import Front from "../components/front";
import logo from "../images/logo.png";
import TopThreeMatts from "../components/top3Mattresses";

const IndexPage = ({ data }) => {
  const { allCarousels } = data.gcms;
  return (
    <Layout>
      <Helmet>
        <title>E.S.C. Mattress Center</title>
        <meta
          name="description"
          content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center" />
        <meta property="og:url" content="https://www.escmattresscenter.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:image:alt"
          content="E.S.C Mattress Center's logo of a panda"
        />
        <meta property="og:title" content="E.S.C. Mattress Center" />
        <meta
          property="og:description"
          content="A licensed mattress retailer for Sealy, Stearns and Foster, and Tempur-Pedic offering almost fifty mattresses with prices to fit every budget.  ESC Mattress Center is a locally owned company in Everett WA with more than twenty years of mattress industry experience between our non-commissioned staff."
        />
      </Helmet>
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
      allCarousels(orderBy: orderofImages_DESC) {
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
