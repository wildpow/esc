import PropTypes from "prop-types";
import Styled from "./brandsCard.styled";

const LifeStyleCard = ({
  bgImg,
  title,
  height,
  mobileHeight,
  children,
  logo,
  url,
}) => (
  <Styled.BrandLink to={url}>
    <Styled.BgImage
      image={bgImg.gatsbyImageData}
      title={title}
      height={height}
      mobileHeight={mobileHeight}
      alt={bgImg.alt}
    />
    <Styled.BrandLogo src={logo.url} className="brand" alt={logo.alt} />
    <Styled.Content className="overlay">
      <h4>{children}</h4>
    </Styled.Content>
  </Styled.BrandLink>
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
