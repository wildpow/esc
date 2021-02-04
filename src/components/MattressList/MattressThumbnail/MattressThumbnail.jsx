import React from "react";
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
} from "./MattressThumbnail.styled";
import FirmnessScale from "./FirmnessScale";

const MattressThumbnail = ({ mattress, url }) => (
  <StyledLink to={url}>
    <Topper>
      <BannerWrapper>
        {mattress.saleBanner.length > 3 && (
          <Banner>{mattress.saleBanner}</Banner>
        )}
        <MattImgContainer>
          <Img
            fluid={mattress.images[0].coverImage.fluid}
            alt={
              mattress.images[0].coverImage.alt === null
                ? `${mattress.brand.displayName} ${mattress.subline.name} ${mattress.nameWithout} mattress`
                : mattress.images[0].coverImage.alt
            }
          />
        </MattImgContainer>
        <FirmnessScale firmNum={mattress.firmness} />
      </BannerWrapper>
      <PriceRange>
        {`$${Math.trunc(
          mattress.shopifyInfo[0].priceRange.minVariantPrice.amount,
        )}
          - $${Math.trunc(
            mattress.shopifyInfo[0].priceRange.maxVariantPrice.amount,
          )}`}
      </PriceRange>
    </Topper>
    <Name>
      {mattress.brand.displayName}
      <br />
      {mattress.subline.name}
      <br />
      {mattress.nameWithout}
    </Name>
  </StyledLink>
);

MattressThumbnail.propTypes = {
  mattress: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
};

export default MattressThumbnail;
