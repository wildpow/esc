import React from "react";
import PropTypes from "prop-types";
import { getImage } from "gatsby-plugin-image";
import { Content, BrandLogo, BgImage, BrandLink } from "./LifeStyleCard.styled";

const LifeStyleCard = ({
  bgImg,
  title,
  height,
  mobileHeight,
  children,
  logo,
  url,
}) => (
  <BrandLink to={url}>
    <BgImage
      image={getImage(bgImg)}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
      alt={bgImg.alt}
      objectFit="none"
    />
    <img src={logo.url} className={`${BrandLogo} brand`} alt={logo.alt} />
    <div className={`${Content} overlay`}>
      <h4>{children}</h4>
    </div>
  </BrandLink>
);

LifeStyleCard.propTypes = {
  logo: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  bgImg: PropTypes.instanceOf(Object).isRequired,
  title: PropTypes.string.isRequired,
  height: PropTypes.string,
  mobileHeight: PropTypes.string,
  children: PropTypes.node,
  url: PropTypes.string,
};
LifeStyleCard.defaultProps = {
  height: null,
  mobileHeight: null,
  children: null,
  url: "/brands",
};

export default LifeStyleCard;
