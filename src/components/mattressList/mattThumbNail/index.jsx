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
} from "./mattThumb.Styles";
import FirmnessScale from "./firmnessScale";

const MattressThumb = ({ mattress, url }) => {
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

MattressThumb.propTypes = {
  mattress: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
};

export default MattressThumb;
