import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
  spacing,
  FadeInAnimation,
  radius,
  rounded,
  boxShadow,
  breakpoints,
} from "../styles/theme.styled";

const HeroCardWrapper = styled.section`
  padding-bottom: ${spacing[20]};
  ${FadeInAnimation}
  .heroCard__content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 72rem;
    padding: ${spacing[3]};
    margin-left: auto;
    margin-right: auto;
    margin-top: -${spacing[5]};
    background-color: white;
    border-radius: ${rounded.lg};
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    box-shadow: ${boxShadow.lg};
  }
  @media (min-width: ${breakpoints.phablet}) {
    .heroCard__content {
      margin-top: -${spacing[12]};
    }
  }
  @media (min-width: ${breakpoints.sm}) {
    .heroCard__content {
      margin-left: ${spacing[5]};
      margin-right: ${spacing[5]};
      padding: ${spacing[10]};
    }
  }
  @media (min-width: ${breakpoints.md}) {
    .heroCard__content {
      padding: ${spacing[10]};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    .heroCard__content {
      margin-top: -${spacing[20]};
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    .heroCard__content {
      margin-top: -${spacing[24]};
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export default function HeroCard({ image, alt, children }) {
  return (
    <HeroCardWrapper>
      <GatsbyImage image={getImage(image)} alt={alt} />
      <div className="heroCard__content">{children}</div>
    </HeroCardWrapper>
  );
}

HeroCard.propTypes = {
  image: PropTypes.instanceOf(Object).isRequired,
  alt: PropTypes.string,
  children: PropTypes.node.isRequired,
};
HeroCard.defaultProps = {
  alt: "E.S.C. Mattress Center in Everett WA",
};
