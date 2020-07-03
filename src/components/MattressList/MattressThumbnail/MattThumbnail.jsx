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
} from "./MattThumb.Styled";
import FirmnessScale from "./FirmnessScale";

const MattressThumbnail = ({ mattress, url }) => {
  return (
    <StyledLink to={url}>
      <Topper>
        <BannerWrapper>
          {mattress.saleInfo[0].saleBanner.length > 3 && (
            <Banner>{mattress.saleInfo[0].saleBanner}</Banner>
          )}
          <MattImgContainer>
            <Img
              fluid={mattress.images[0].coverImage.fluid}
              alt={
                mattress.images[0].coverImage.alt === null
                  ? `${mattress.brand.displayName} ${mattress.subline.name} ${mattress.name} mattress`
                  : mattress.images[0].coverImage.alt
              }
            />
          </MattImgContainer>
          <FirmnessScale firmNum={mattress.firmness} />
        </BannerWrapper>
        <PriceRange>
          {`$${mattress.priceLow}
          - $${mattress.priceHigh}`}
        </PriceRange>
      </Topper>
      <Name>
        {mattress.brand.displayName}
        <br />
        {mattress.subline.name}
        <br />
        {mattress.name}
      </Name>
    </StyledLink>
  );
};

MattressThumbnail.propTypes = {
  mattress: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
};

export default MattressThumbnail;
