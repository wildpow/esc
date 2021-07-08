import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import { graphql, Link } from "gatsby";
import { Carousel } from "react-responsive-carousel";
import Layout from "../components/Layout";
import Front from "../components/Home/FrontContentCards";
import TopThreeMatts from "../components/Home/TopMattress";
import {
  // FadeInAnimation,
  breakpoints,
} from "../styles/theme.styled";

/* ${FadeInAnimation} */
const IndexRoot = styled.div`
  margin-right: auto;
  margin-left: auto;
  padding-top: 1px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 15px;

  @media (min-width: ${breakpoints.phablet}) {
    padding-top: 15px;
  }
  @media (min-width: ${breakpoints.lg}) {
    padding-bottom: 45px;
  }
`;

const IndexPage = ({ data }) => {
  const { carousel } = data.datoCmsFrontPage;
  let sources = [];
  return (
    <Layout>
      <HelmetDatoCms seo={data.datoCmsFrontPage.seoMetaTags} />
      <IndexRoot>
        <Carousel
          // infiniteLoop
          autoPlay
          showThumbs={false}
          interval={6000}
          centerMode
          centerSlidePercentage={100}
          showStatus={false}
          // dynamicHeight
          // style={{ minHeight: "140px", height: "auto" }}
        >
          {carousel.map((item, index) => {
            sources = withArtDirection(getImage(item.image), [
              {
                media: `(max-width: 501px)`,
                image: getImage(item.mobileImage),
              },
            ]);

            return (
              <Link key={item.id} to={`${item.url}`}>
                <GatsbyImage
                  image={sources}
                  alt={item.image.alt}
                  loading={index === 0 ? "eager" : "lazy"}
                  // fadeIn={index !== 0}
                  // imgStyle={{ minHeight: "217px", height: "auto" }}
                  style={{ minHeight: "140px", height: "auto" }}
                />
              </Link>
            );
          })}
        </Carousel>
        <Front />
        <TopThreeMatts />
      </IndexRoot>
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
          gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, width: 1536)

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
