import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import {
  Main,
  PicHolder,
  StoreImg,
  MapImg,
  Address,
  Span,
  RegularParagraph,
  BlueWrapper,
  SecondP,
  PopImg,
} from "../styles/aboutStyles";
import { H2 } from "../styles/mainStyles";
import store1 from "../images/outsideNightRatio.jpg";
import store2 from "../images/outsideDayRatio.jpg";
import map from "../images/storeMapRatio.png";
import Layout from "../components/layout";
import pop from "../images/funkoWithoutBillWithText.png";
import AboutReview from "../components/ReviewView";

const AboutH2 = styled(H2)`
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.8rem;
  }
`;
const About = ({ data }) => {
  const content = data.allInternalAboutReviews.nodes.filter(
    val => val.comments !== null,
  );
  const maxIndex = content.length - 1;
  return (
    <Layout>
      <Main>
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        <header>
          <AboutH2>
            Our goal is to help Snohomish County sleep like the experts do and
            wake up feeling better.
          </AboutH2>
        </header>
        <AboutReview maxIndex={maxIndex} content={content} />
        <PicHolder>
          <StoreImg
            src={store1}
            alt="E.S.C Mattress Center store front in Everett Washington at night"
          />
          <MapImg
            src={map}
            alt="Map of our mattress store the showing the major cross streets of Pacific Hwy/ Evergreen Way and Everett Mall Way"
          />
          <StoreImg
            src={store2}
            alt="E.S.C Matttress Center store front from Everett Mall Way in Snohomish County"
          />
        </PicHolder>

        <Address>
          <Span>
            We are located at 10121 Evergreen Way #30, Everett WA 98204.
          </Span>
          <br />
          We are on Everett Mall Way next to Outback Steakhouse and across the
          street from Enterprise car rentals.
        </Address>

        <RegularParagraph>
          We started our own mattress store to do things differently. Instead of
          focusing on commissions or the lowest priced rectangle, we want to
          focus on you and getting you the best night’s sleep possible. With
          over twenty years of combined industry experience we take pride in
          helping you find the “bed of your dreams” so that you can wake up
          feeling rested and ready to take on all that your day has to offer.
        </RegularParagraph>

        <RegularParagraph>
          We’re here to help advise you by having our non-commissioned staff ask
          you some questions and listen to your answers to help recommend
          products that suit your needs. “ESC” stands for Expert Sleep Centers,
          and with over twenty years of industry experience we know all about
          sleep and mattresses so you don’t have to. We believe sleep is an
          important part of everyone’s day, and people have a better life when
          they’re waking up every morning feeling rested, rejuvenated and
          refreshed.
        </RegularParagraph>

        <BlueWrapper>
          <SecondP>
            We offer almost fifty mattresses in a wide range of prices to fit
            every budget. Our mattresses are made in the USA -- with most of
            them coming from local manufacturing plants -- and are brands that
            most people know and trust
            <br />
            (Sealy, Stearns & Foster, Tempur-Pedic).
          </SecondP>
        </BlueWrapper>

        <RegularParagraph>
          We are locally owned and operated, and even do most of our own
          delivery service ourselves to save you money. If you live outside
          Snohomish County, Skagit County, or King County and want us to deliver
          just call ahead and we’ll do everything we can to make it happen (we
          go to Whidbey Island all the time).
        </RegularParagraph>
        <PopImg
          src={pop}
          alt="FunCo toys of E.S.C Mattress Centers co-founders Joshua and William"
        />
      </Main>
    </Layout>
  );
};

About.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const aboutSEO = graphql`
  query aboutSEO {
    datoCmsSeo(name: { eq: "about" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allInternalAboutReviews {
      nodes {
        comments
        reviewId
        reviewer {
          firstName
          lastName
        }
      }
    }
  }
`;

export default About;
