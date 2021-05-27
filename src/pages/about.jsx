import PropTypes from "prop-types";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import {
  fonts,
  fontSize,
  spacing,
  colors,
  breakpoints,
  boxShadow,
} from "../styles/theme.styled";
import {
  AboutThreeImages,
  AboutReviews,
  AboutHero,
  AboutBrands,
  AboutCard,
} from "../components/About";
import TabBox from "../components/Landing/TabBox";

const AboutRoot = styled.div`
  background-color: white;
  box-shadow: ${boxShadow.default};
`;

const PopWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to top, ${colors.red[900]} 55%, white 0%);
  padding-bottom: 40px;
  .popImg {
    max-width: 400px;
    flex: 1;
    width: 100%;
  }
  .paragraph {
    width: 100%;
    display: flex;
    justify-content: center;
    p {
      line-height: ${spacing[8]};
      font-size: ${fontSize.lg};
      max-width: 1320px;
      color: white;
      font-family: ${fonts.sans};
      text-align: center;
      width: 100%;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
  @media (min-width: ${breakpoints.xsm}) {
    background: linear-gradient(to top, ${colors.red[900]} 50%, white 0%);
  }
  @media (min-width: ${breakpoints.sm}) {
    background: linear-gradient(to top, ${colors.red[900]} 52%, white 0%);
    padding-left: 0px;
    padding-right: 0px;
  }
  @media (min-width: ${breakpoints.md}) {
    background: linear-gradient(to top, ${colors.red[900]} 46%, white 0%);
  }
  @media (min-width: ${breakpoints.lg}) {
    background: linear-gradient(to top, ${colors.red[900]} 45%, white 0%);

    .paragraph {
      p {
        font-size: ${fontSize["2xl"]};
      }
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    background: linear-gradient(to top, ${colors.red[900]} 42%, white 0%);
  }
`;
const Flow = styled.div`
  margin-top: ${({ mt }) => mt}em;
  @media (min-width: ${breakpoints.lg}) {
    margin-top: ${({ mt }) => mt + 5}em;
  }
  @media (min-width: ${breakpoints.xl}) {
    margin-top: ${({ mt }) => mt + 8}em;
  }
`;

const CleanStoreFlow = styled(Flow)`
  max-width: 1320px;
  width: 90%;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${breakpoints.md}) {
    width: 85%;
  }
`;
const About = ({ data }) => {
  const { datoCmsAboutPage } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsAboutPage.seoLink.seoMetaTags} />
      <AboutRoot>
        <AboutHero
          heroAlt={datoCmsAboutPage.hero.alt}
          heroText={datoCmsAboutPage.heroText}
          heroImg={datoCmsAboutPage.hero}
        />
        <AboutThreeImages
          threeImage={datoCmsAboutPage.threeImage}
          threeImageText={datoCmsAboutPage.threeImageText}
        />

        <Flow mt={7}>
          <AboutCard
            text={datoCmsAboutPage.articleSection[0].text}
            image={datoCmsAboutPage.articleSection[0].image}
            alt={datoCmsAboutPage.articleSection[0].image.alt}
          />
        </Flow>
        <Flow mt={7}>
          <AboutReviews
            maxIndex={datoCmsAboutPage.reviews.length - 1}
            content={datoCmsAboutPage.reviews}
          />
        </Flow>
        <Flow mt={7}>
          <AboutCard
            rotate
            text={datoCmsAboutPage.articleSection[1].text}
            image={datoCmsAboutPage.articleSection[1].image}
            alt={datoCmsAboutPage.articleSection[1].image.alt}
          />
        </Flow>
        <Flow mt={7}>
          <AboutBrands
            brandImages={datoCmsAboutPage.brands}
            brandText={datoCmsAboutPage.brandText}
          />
        </Flow>
        {datoCmsAboutPage.optionalTabComponent && (
          <CleanStoreFlow mt={7}>
            <TabBox
              about
              tabs={datoCmsAboutPage.optionalTabComponent.box}
              hero={datoCmsAboutPage.optionalTabComponent.topImage}
              heroText={datoCmsAboutPage.optionalTabComponent.topText}
              topButtonName={
                datoCmsAboutPage.optionalTabComponent.topButtonName
              }
              topButtonUrl={datoCmsAboutPage.optionalTabComponent.topButtonUrl}
            />
          </CleanStoreFlow>
        )}
        <Flow mt={7}>
          <PopWrapper>
            <GatsbyImage
              image={getImage(datoCmsAboutPage.pop)}
              className="popImg"
              alt={datoCmsAboutPage.pop.alt}
            />
            <div className="paragraph">
              <p>
                We are located at 10121 Evergreen Way #30, Everett WA 98204.
                <br />
                We are on Everett Mall Way next to Outback Steakhouse and across
                the street from Enterprise car rentals.
              </p>
            </div>
          </PopWrapper>
        </Flow>
      </AboutRoot>
    </Layout>
  );
};
About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const about = graphql`
  query about {
    datoCmsAboutPage {
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      articleSection {
        text
        image {
          alt
          gatsbyImageData(layout: CONSTRAINED, width: 400)
        }
      }
      optionalTabComponent {
        name
        topText
        topImage {
          gatsbyImageData(layout: CONSTRAINED, width: 458)
          alt
          height
          url
          width
          title
        }
        box {
          title
          description
          picture {
            gatsbyImageData(layout: CONSTRAINED, width: 728)
            alt
            title
            url
          }
        }
        topButtonUrl
        topButtonName
      }
      heroText
      hero {
        alt
        gatsbyImageData(layout: FULL_WIDTH, width: 1530)
      }
      threeImageText
      threeImage {
        alt
        filename
        gatsbyImageData(layout: CONSTRAINED, width: 420)
      }
      brandText
      brands {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 425)
      }
      reviews {
        comment
        nameOfReviewer
      }
      seoLink {
        seoMetaTags {
          ...GatsbyDatoCmsSeoMetaTags
        }
      }
      pop {
        alt
        gatsbyImageData(layout: CONSTRAINED, width: 420)
      }
    }
  }
`;
export default About;
