import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import {
  StyledLink,
  Topper,
  MattImgContainer,
  PriceRange,
  Name,
} from "../../mattressList/MattThumbnail/MattThumb.Styled";

const AccThumb = ({ acc }) => {
  return (
    <StyledLink to={`/accessories/${acc.handle}`}>
      <Topper>
        <MattImgContainer>
          <Img
            fluid={acc.images[0].localFile.childImageSharp.fluid}
            alt={acc.title}
          />
        </MattImgContainer>
      </Topper>
      <PriceRange>
        {`$${acc.priceRange.minVariantPrice.amount}
          - $${acc.priceRange.maxVariantPrice.amount}`}
      </PriceRange>
      <Name>{acc.title}</Name>
    </StyledLink>
  );
};

AccThumb.propTypes = {
  acc: PropTypes.instanceOf(Object).isRequired,
};
export default AccThumb;
