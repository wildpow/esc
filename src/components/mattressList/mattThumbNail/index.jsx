import React from "react";
import styled from "styled-components";
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

const Firmness = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 20px;
  left: 0;
  /* border: 2px solid black; */
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
  div {
    position: relative;
  }
  .firm {
    font-family: ${props => props.theme.MainFont1};
    /* padding-left: 10px; */
    color: black;
    width: 20%;
    text-align: center;
  }
  .soft {
    font-family: ${props => props.theme.MainFont1};
    /* padding-right: 10px; */
    color: black;
    width: 20%;
    text-align: center;
  }
  .scale {
    height: 15px;
    border: 1px solid #f7d0d1;
    width: 80%;
    position: relative;
    background: ${props => props.theme.newColor4};
  }
  .number {
    font-family: ${props => props.theme.MainFont1};
    left: 40%;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.1rem;
    background: ${props => props.theme.mainColor1};
    color: white;

    background: #fcfcff;
    border: 1px solid ${props => props.theme.mainColor1};
    color: black;
  }
`;
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
          <Firmness>
            <div className="firm">Firm</div>
            <div className="scale">
              <div className="number">3</div>
            </div>
            <div className="soft">Soft</div>
          </Firmness>
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
