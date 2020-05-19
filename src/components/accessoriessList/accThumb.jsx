import React from "react";
import Img from "gatsby-image";
import {
  StyledLink,
  Topper,
  MattImgContainer,
  PriceRange,
  Name,
} from "../mattressList/mattThumbNail/mattThumb.Styles";

const AccThumb = ({ acc }) => {
  return (
    <StyledLink to={`/accessories/${acc.handle}`}>
      <Topper>
        <MattImgContainer>
          {console.log(acc)}
          <Img
            fluid={acc.images[0].localFile.childImageSharp.fluid}
            alt={acc.title}
          />
        </MattImgContainer>
      </Topper>
      <PriceRange>
        {`$${acc.priceRange.maxVariantPrice.amount}
          - $${acc.priceRange.minVariantPrice.amount}`}
      </PriceRange>
      <Name>{acc.title}</Name>
    </StyledLink>
  );
};

export default AccThumb;
