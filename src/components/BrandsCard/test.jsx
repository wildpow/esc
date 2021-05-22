import styled from "styled-components";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { boxShadowHover, fonts } from "../../styles/theme.styled";

const CardWraper = styled(Link)`
  display: grid;
  /* max-height: 228px; */
  grid-template-areas: "card";
  ${boxShadowHover}
  width: 100%;
  .bgImage {
    grid-area: card;
    z-index: 1;
    filter: brightness(85%) saturate(135%);
  }
  .overlay {
    grid-area: card;
    z-index: 2;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    background: rgba(20, 20, 40, 0);
    display: flex;
    justify-content: center;
    align-items: flex-end;
    h4 {
      color: white;
      font-family: ${fonts.serif};
      font-weight: 300;
      text-shadow: 2px 2px 4px rgba(10, 10, 10, 1);
      padding-left: 5px;
      padding-right: 5px;
      text-align: center;
    }
  }
  .brandImage {
    width: 250px;
    padding-bottom: 20px;
    justify-self: center;
    align-self: flex-end;
    grid-area: card;
    z-index: 3;
    transition: transform 0.25s ease-in;
  }
  :hover .overlay,
  :focus .overlay {
    opacity: 1;
    background: rgba(20, 20, 40, 0.5);
  }
  :hover .brandImage,
  :focus .brandImage {
    transform: translateY(-80%);
  }
`;

const TestCard = ({ bgImg, title, description, logo, url }) => (
  <CardWraper to={url}>
    <GatsbyImage
      image={getImage(bgImg)}
      title={title}
      alt={bgImg.alt}
      className="bgImage"
    />
    <img src={logo.url} alt={logo.alt} className="brandImage" />
    <div className="overlay">
      <h4>{description}</h4>
    </div>
  </CardWraper>
);

TestCard.propTypes = {
  description: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  bgImg: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,

  url: PropTypes.string,
};
TestCard.defaultProps = {
  url: "/brands",
};

export default TestCard;
