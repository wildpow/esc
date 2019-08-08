import React from "react";
import PropTypes from "prop-types";
import {
  StyledLink,
  MattImg,
  Topper,
  BannerWrapper,
  Banner,
  PriceRange,
  Name,
} from "./mattThumbStyles";

const MattressThumb = ({ mattress, url }) => {
  return (
    <StyledLink to={url}>
      <Topper>
        <BannerWrapper>
          {mattress.saleInfo[0].saleBanner.length > 3 && (
            <Banner>{mattress.saleInfo[0].saleBanner}</Banner>
          )}

          <MattImg
            src={mattress.images[0].coverImage.url}
            alt={
              mattress.images[0].coverImage.alt === null
                ? `${mattress.brand.displayName} ${mattress.subline.name} ${
                    mattress.name
                  } mattress`
                : mattress.images[0].coverImage.alt
            }
          />
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
