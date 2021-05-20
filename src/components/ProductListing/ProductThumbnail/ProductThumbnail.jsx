import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import {
  StyledLink,
  MattImgContainer,
  Topper,
  BannerWrapper,
  Banner,
  PriceRange,
  Name,
} from "./productThumbnail.styled";
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
        image: product.images[0].coverImage,
        alt:
          product.images[0].coverImage.alt === null
            ? `${product.brand.displayName} ${product.subline.name} ${product.nameWithout} mattress`
            : product.images[0].coverImage.alt,
      }
    : {
        image: product.threeImageBlock[0].coverImage,
        alt: product.threeImageBlock[0].coverImage.alt,
      };
  const { image, alt } = imageInfo;
  return (
    <StyledLink to={url}>
      <Topper>
        <BannerWrapper>
          {product.saleBanner.length > 3 && (
            <Banner>{product.saleBanner}</Banner>
          )}
          <MattImgContainer>
            <GatsbyImage image={getImage(image)} alt={alt} />
          </MattImgContainer>
          {mattress && <FirmnessScale firmNum={product.firmness} />}
        </BannerWrapper>
        {/* <PriceRange>
          {`$${Math.trunc(
            product.shopifyInfo[0].priceRangeV2.minVariantPrice.amount
          )}
        - $${Math.trunc(
          product.shopifyInfo[0].priceRangeV2.maxVariantPrice.amount
        )}`}
        </PriceRange> */}
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
