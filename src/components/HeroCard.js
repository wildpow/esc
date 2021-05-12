import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { css, theme } from "twin.macro";
import FadeIn from "../keyframes/fadeIn.styled";

const contactUsRoot = css`
  padding-bottom: ${theme`spacing.20`};
  animation-duration: 0.5s;
  animation-fill-mode: both;
  animation: ${FadeIn} 0.35s linear normal;
  .contactUsWrapper {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1536px;
    padding: ${theme`spacing.3`};
    margin: 0 auto;
    margin-top: -${theme`spacing.5`};
    background-color: white;
    border-radius: ${theme`borderRadius.lg`};
    box-shadow: ${theme`boxShadow.lg`};
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  @media (min-width: ${theme`screens.sm`}) {
    .contactUsWrapper {
      margin: 0 ${theme`spacing.5`};
      padding: 2.5rem /* 40px */;
    }
  }
  @media (min-width: ${theme`screens.phablet`}) {
    .contactUsWrapper {
      margin-top: -3rem;
    }
  }
  @media (min-width: ${theme`screens.md`}) {
    .contactUsWrapper {
      padding: 2.5rem;
    }
  }
  @media (min-width: ${theme`screens.lg`}) {
    .contactUsWrapper {
      margin-top: -${theme`spacing.20`};
    }
  }
  @media (min-width: ${theme`screens.xl`}) {
    .contactUsWrapper {
      margin-top: -${theme`spacing.24`};
    }
  }
`;
const HeroCard = ({ image, alt, children }) => (
  <section className={contactUsRoot}>
    <GatsbyImage image={image} alt={alt} />
    <div className="contactUsWrapper">{children}</div>
  </section>
);

export default HeroCard;
