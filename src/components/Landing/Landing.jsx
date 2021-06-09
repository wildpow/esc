import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import { styled } from "linaria/react";
import { HelmetDatoCms } from "gatsby-source-datocms";
import TabBox from "./TabBox";
import { P } from "./landing.styled";
import HeaderButtons from "./LandingHeaderButtons";

const Header = styled.div`
  padding-top: 2em;
  margin-bottom: 2em;
  max-width: 662px;
  max-height: 116px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (max-width: 768px) {
    margin-right: 30px;
    margin-left: 30px;
  }
  @media screen and (max-width: 1024px) {
    padding-top: 0;
  }
`;

const Container = styled.section`
  /* padding-right: 15px;
  padding-left: 15px; */
  margin-right: auto;
  margin-left: auto;
  .lastHr {
    padding-bottom: 0px;
  }
  @media (min-width: 768px) {
    padding-top: 20px;
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1024px) {
    .lastHr {
      padding-bottom: 80px;
    }
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const Hero = styled(GatsbyImage)`
  width: 100%;
  height: auto;

  @media only screen and (max-width: 768px) {
    height: 210px;
    overflow: hidden;
    /* width: 100vw; */
    margin-left: 0px;
  }
`;
const LandingRoot = styled.article``;
const Hr = styled.hr`
  border-top: 1px solid #eee;
  border-bottom: 2px solid #7ea9c8;
  margin-bottom: 3em;
  display: block;
`;
const Landing = ({ data, buttonName, buttonURL }) => {
  const { headingImg, heroImg, description, tabBox, seoLink } = data;
  return (
    <LandingRoot style={{ maxWidth: "1440px", backgroundColor: "white" }}>
      <HelmetDatoCms seo={seoLink.seoMetaTags} />
      <Header>
        <GatsbyImage image={getImage(headingImg)} alt={headingImg.alt} />
      </Header>
      <Container>
        <Hero image={getImage(heroImg)} alt={heroImg.alt} />
      </Container>
      <Container
        style={{ marginTop: "3em", paddingRight: "15px", paddingLeft: "15px" }}
      >
        <P style={{ marginBottom: "10px" }}>{description}</P>
        <HeaderButtons buttonName={buttonName} buttonURL={buttonURL} />
        {tabBox.map((item) => (
          <div key={item.id}>
            <Hr />
            <TabBox
              tabs={item.box}
              hero={item.topImage}
              heroText={item.topText}
              topButtonName={item.topButtonName}
              topButtonUrl={item.topButtonUrl}
            />
          </div>
        ))}
        <div className="lastHr">
          <Hr style={{ marginBottom: 0, marginTop: 0 }} />
        </div>
      </Container>
    </LandingRoot>
  );
};

Landing.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  buttonName: PropTypes.string,
  buttonURL: PropTypes.string,
};

Landing.defaultProps = {
  buttonName: undefined,
  buttonURL: undefined,
};

export default Landing;
