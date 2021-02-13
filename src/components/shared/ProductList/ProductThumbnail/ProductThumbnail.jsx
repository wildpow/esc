import Img from "gatsby-image";
import PropTypes from "prop-types";
import {
  StyledLink,
  MattImgContainer,
  Topper,
  BannerWrapper,
  Banner,
  PriceRange,
  Name,
} from "./ProductThumbnail.styled";
import FirmnessScale from "./FirmnessScale";

export default function ProductThumbnail({ product, url, mattress }) {
  const name = () => {
    if (mattress) {
      return (
        <>
          {product.brand.displayName}
          <br />
          {product.subline.name}
          <br />
          {product.nameWithout}
        </>
      );
    }
    return product.title;
  };
  const imageInfo = mattress
    ? {
        fluid: product.images[0].coverImage.fluid,
        alt:
          product.images[0].coverImage.alt === null
            ? `${product.brand.displayName} ${product.subline.name} ${product.nameWithout} mattress`
            : product.images[0].coverImage.alt,
      }
    : {
        fluid: product.threeImageBlock[0].coverImage.fluid,
        alt: product.threeImageBlock[0].coverImage.alt,
      };
  const { fluid, alt } = imageInfo;
  return (
    <StyledLink to={url}>
      <Topper>
        <BannerWrapper>
          {product.saleBanner.length > 3 && (
            <Banner>{product.saleBanner}</Banner>
          )}
          <MattImgContainer>
            <Img fluid={fluid} alt={alt} />
          </MattImgContainer>
          {mattress && <FirmnessScale firmNum={product.firmness} />}
        </BannerWrapper>
        <PriceRange>
          {`$${Math.trunc(
            product.shopifyInfo[0].priceRange.minVariantPrice.amount,
          )}
        - $${Math.trunc(
          product.shopifyInfo[0].priceRange.maxVariantPrice.amount,
        )}`}
        </PriceRange>
      </Topper>
      <Name>{name()}</Name>
    </StyledLink>
  );
}
ProductThumbnail.propTypes = {
  product: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
  mattress: PropTypes.bool,
};

ProductThumbnail.defaultProps = {
  mattress: false,
};
