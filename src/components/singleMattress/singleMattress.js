import React from "react";
import PropTypes from "prop-types";
import {
  LinkWrapper,
  StyledLink,
  Divy,
  MattImg,
  PriceRange,
  Name,
} from "./singleMattressStyles";

const SingleMattress = ({ mattress, url }) => {
  return (
    <LinkWrapper key={mattress.id}>
      <StyledLink to={url}>
        <Divy>
          <MattImg
            src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
              mattress.coverImg.handle
            }`}
            alt={`Image of a ${mattress.brandName} ${mattress.subBrand} ${
              mattress.subName
            } mattress`}
          />
          <PriceRange>
            {`$${mattress.priceRange[0]} 
          - $${mattress.priceRange[1]}`}
          </PriceRange>
        </Divy>
        <Name>
          {mattress.brandName}
          <br />
          {mattress.subBrand}
          <br />
          {mattress.subName}
        </Name>
      </StyledLink>
    </LinkWrapper>
  );
};

SingleMattress.propTyles = {
  mattress: PropTypes.instanceOf(Object).isRequired,
  url: PropTypes.string.isRequired,
};

export default SingleMattress;
