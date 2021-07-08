import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
  fonts,
  fontSize,
  spacing,
  colors,
  breakpoints,
  radius,
  boxShadow,
} from "../../styles/theme.styled";

const AboutCardRoot = styled.div`
  position: relative;
  display: flex;

  justify-content: center;
  background-color: white;
  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 20%;
    width: 100%;
    height: 150px;
    background-color: ${colors.red[900]};
    z-index: 0;
  }
  article {
    flex-direction: column-reverse;
    padding: 10px;
    display: flex;
    max-width: 1320px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${colors.gray[400]};
    border-radius: ${radius.large}px;
    width: 90%;
    background-color: white;
    box-shadow: ${boxShadow.md};
    z-index: 1;
  }
  .image-wrapper {
    background-color: white;
    z-index: 1;
    height: 200px;
    width: 100%;
  }
  .para-wrapper {
    width: 100%;
    font-family: ${fonts.serif};
    font-size: ${fontSize.sm};
    line-height: ${spacing[6]};
    z-index: 1;
    padding: 0px;
    background-color: white;
    p {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: 10px;
    }
  }
  @media (min-width: ${breakpoints.sm}) {
    .para-wrapper {
      font-size: ${fontSize.base};
      line-height: ${spacing[8]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .para-wrapper {
      font-size: ${fontSize.base};
      font-weight: 300;
      p {
        font-size: ${fontSize.lg};
        line-height: ${spacing[8]};
        padding-top: 20px;
      }
    }
    article {
      width: 85%;
      padding: 20px;
    }
    .image-wrapper {
      height: 350px;
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    article {
      padding: 30px;
    }
    .para-wrapper {
      p {
        padding-top: 30px;
      }
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    ::after {
      top: auto;
      bottom: 20%;
      width: 100%;
      height: 30%;
    }
    article {
      justify-content: space-between;
      flex-direction: ${({ rotate }) => (rotate ? "row-reverse" : "row")};
    }
    .image-wrapper {
      height: 350px;
      width: 50%;
    }
    .para-wrapper {
      align-self: flex-start;
      font-size: ${fontSize["2xl"]};
      line-height: ${spacing[8]};
      width: 50%;
      padding: 0;
      padding-right: ${({ rotate }) => (rotate ? "0px" : "30px")};
      padding-left: ${({ rotate }) => (rotate ? "30px" : "0px")};
      background-color: transparent;
      p {
        font-weight: 300;
        padding-top: 0;
        margin: auto;
      }
    }
  }
`;
const AboutCard = ({ text, image, rotate, alt }) => (
  <AboutCardRoot rotate={rotate ? 1 : 0}>
    <article>
      <div className="para-wrapper">
        <p>{text}</p>
      </div>
      <div className="image-wrapper">
        <GatsbyImage
          style={{ width: "100%", height: "100%" }}
          image={getImage(image)}
          alt={alt}
        />
      </div>
    </article>
  </AboutCardRoot>
);
AboutCard.defaultProps = {
  text: "YOU DID NOT SEND ANY TEXT DOWN SO THIS IS THE DEFAULT",
  alt: "E.S.C. Mattress Center 'sleep like the experts do'",
  rotate: false,
};
AboutCard.propTypes = {
  text: PropTypes.string,
  image: PropTypes.instanceOf(Object).isRequired,
  rotate: PropTypes.bool,
  alt: PropTypes.string,
};

export default AboutCard;
