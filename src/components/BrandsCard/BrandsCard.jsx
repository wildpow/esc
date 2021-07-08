import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { boxShadowHover, fonts, fontSize } from "../../styles/theme.styled";
import useMobileDetect from "../../hooks/useMobileDect";
// ${({ isMobile }) => (isMobile ? MobileCardStyles : DesktopStyles)}
const mobileOrDesktop = (props) =>
  props.isMobile
    ? css`
        .overlay {
          h4 {
            background: rgba(20, 20, 40, 0.5);
          }
        }
      `
    : css`
        .overlay {
          opacity: 0;
          background: rgba(20, 20, 40, 0);
          justify-content: center;
        }
        .brandImage {
          padding-top: 0px;
          padding-bottom: 20px;
          justify-self: center;
          align-self: flex-end;
          transition: transform 0.25s ease-in;
        }
        :hover .overlay,
        :focus .overlay {
          opacity: 1;
          background: rgba(20, 20, 40, 0.5);
        }
        :hover .brandImage,
        :focus .brandImage {
          transform: translateY(-60%);
        }
      `;

const CardWraper = styled(Link)`
  text-decoration: none;

  display: grid;
  grid-template-areas: "card";
  ${boxShadowHover}
  height: 228px;
  width: 100%;
  .bgImage {
    grid-area: card;
    z-index: 1;
    filter: brightness(85%) saturate(135%);
  }
  .overlay {
    grid-area: card;
    z-index: 2;
    opacity: 1;
    transition: all 0.3s ease-in-out;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    h4 {
      width: 100%;
      color: white;
      font-family: ${fonts.serif};
      font-weight: 300;
      text-shadow: 2px 2px 4px rgba(10, 10, 10, 1);
      padding-left: 5px;
      padding-right: 5px;
      text-align: center;
      margin: 0;
      padding-top: 10px;
      padding-bottom: 10px;
      line-height: 1.3rem;
    }
  }
  .brandImage {
    width: 200px;
    padding-bottom: 20px;
    justify-self: center;
    align-self: center;
    grid-area: card;
    z-index: 3;
    transition: transform 0.25s ease-in;
  }

  @media (min-width: 550px) {
    .brandImage {
      width: 250px;
      padding-top: 20px;
      justify-self: center;
      align-self: flex-start;
    }
    .overlay {
      h4 {
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
  @media (min-width: 650px) {
    .overlay {
      h4 {
        font-size: ${fontSize.lg};
        line-height: 1.5rem;
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }
  @media (min-width: 768px) {
    height: 250px;
  }
  @media (min-width: 1536px) {
    height: 275px;
  }

  ${mobileOrDesktop}
`;

const TestCard = ({ bgImg, title, description, logo, url }) => {
  const detectMobile = useMobileDetect();

  return (
    <CardWraper to={url} isMobile={detectMobile.isMobile()}>
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
};

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
