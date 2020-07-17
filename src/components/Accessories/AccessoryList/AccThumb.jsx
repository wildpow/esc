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
        {`$${Number(acc.priceRange.minVariantPrice.amount).toFixed(2)}
          - $${Number(acc.priceRange.maxVariantPrice.amount).toFixed(2)}`}
      </PriceRange>
      <Name>{acc.title}</Name>
    </StyledLink>
  );
};

AccThumb.propTypes = {
  acc: PropTypes.instanceOf(Object).isRequired,
};
export default AccThumb;
