import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import {
  StyledLink,
  Topper,
  MattImgContainer,
  PriceRange,
  Name,
} from "../../MattressList/MattressThumbnail/MattressThumbnail.styled";

const AccThumb = ({ acc }) => {
  return (
    <StyledLink to={`/accessories/${acc.slug}`}>
      <Topper>
        <MattImgContainer>
          <Img
            fluid={acc.threeImageBlock[0].coverImage.fluid}
            alt={acc.threeImageBlock[0].coverImage.alt}
          />
        </MattImgContainer>
      </Topper>
      <PriceRange>
        {`$${acc.shopifyInfo[0].priceRange.minVariantPrice.amount}
          - $${acc.shopifyInfo[0].priceRange.maxVariantPrice.amount}`}
      </PriceRange>
      <Name>{acc.title}</Name>
    </StyledLink>
  );
};

AccThumb.propTypes = {
  acc: PropTypes.instanceOf(Object).isRequired,
};
export default AccThumb;
