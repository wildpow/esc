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
          {mattress.saleBanner !== null ? (
            <>
              {mattress.saleBanner.length > 3 && (
                <Banner>{mattress.saleBanner}</Banner>
              )}
            </>
          ) : null}

          <MattImg
            src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
              mattress.coverImg.handle
            }`}
            alt={`Image of a ${mattress.brandName} ${mattress.subBrand} ${
              mattress.subName
            } mattress`}
          />
        </BannerWrapper>
        <PriceRange>
          {`$${mattress.priceRange[0]} 
          - $${mattress.priceRange[1]}`}
        </PriceRange>
      </Topper>
      <Name>
        {mattress.brandName}
        <br />
        {mattress.subBrand}
        <br />
        {mattress.subName}
      </Name>
    </StyledLink>
  );
};

MattressThumb.propTypes = {
  mattress: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
};

export default MattressThumb;
