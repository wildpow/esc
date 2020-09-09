import React from "react";
import styled from "styled-components";
import { string } from "prop-types";
import { NewWrapper, ThreeMattWrapper } from "../Top3Mattress/Top3Mattresses";
import { Headline, FooterLink } from "../../../styles/homeStyles";
import AccThumb from "../../Accessories/AccessoryList/AccThumb";
import {
  fonts,
  fontSize,
  sizing,
  breakpoints,
  colors,
  spacing,
} from "../../../utils/styles";
import { PrimaryButton } from "../../shared/Buttons";
import CartIcon from "../../../assets/shopping-cart-solid.svg";
import ForwardArrow from "../../../assets/arrow-right-solid.svg";
import BackArrow from "../../../assets/arrow-left-solid.svg";

const CheckOut = styled(PrimaryButton)`
  font-size: 1.25rem;
  width: 100%;
  padding: 25px;
  .fa-arrow-right {
    width: 15px;
    margin-left: 10px;
  }
  @media (min-width: 1028px) {
    width: initial;
  }
`;
const Wraps = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  display: -webkit-box;
  display: flex;
  gap: 15px;
  flex: 1;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${colors.gray["100"]};
  ::-webkit-scrollbar {
    width: 25px;
    height: 25px;
  }
  ::-webkit-scrollbar-thumb {
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#ff8a00),
      to(#e52e71)
    );
    background: ${colors.blue["900"]};
    border-radius: 30px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }
  ::-webkit-scrollbar-track {
    background: ${colors.gray["300"]};
  }
  @media (min-width: 1440px) {
    overflow-x: auto;
    overflow-y: auto;
    padding-top: 20px;
  }
`;
const NewHeadline = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-items: flex-start;
  padding-bottom: 0px;
  background-color: ${colors.gray["100"]};
  h2 {
    position: relative;
    z-index: 2;
    padding: 15px;
    font-weight: 700;
    font-family: ${fonts.sans};
    color: white;
    padding-left: 50px;
    margin: 0;
    font-size: ${fontSize["3xl"]};
    ::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 40px;
      top: 10px;
      left: 20px;
      opacity: 0.8;
      background: ${colors.blue["800"]};
      z-index: -1;
    }
    ::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 40px;
      top: 40px;
      opacity: 0.8;
      right: 5px;
      z-index: -1;
      background: ${colors.red["800"]};
    }
  }
  @media (min-width: 1440px) {
    padding-bottom: 20px;
  }
`;
const BottomWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.gray["100"]};
  padding-top: 20px;
`;
const TopAccessories = ({
  products,
  topAccessoryFooter,
  topAccessoryHeader,
  topAccessoryFooterUrl,
}) => {
  return (
    <NewWrapper>
      <NewHeadline>
        <h2>{topAccessoryHeader}</h2>
      </NewHeadline>
      <Wraps>
        {products.map((item) => (
          <AccThumb acc={item} key={item.shopifyId} front />
        ))}
      </Wraps>
      <BottomWrap>
        <CheckOut to={topAccessoryFooterUrl}>
          {topAccessoryFooter}
          <ForwardArrow />
        </CheckOut>
      </BottomWrap>
    </NewWrapper>
  );
};

TopAccessories.propTypes = {
  topAccessoryFooter: string.isRequired,
  topAccessoryHeader: String.isRequired,
  topAccessoryFooterUrl: String.isRequired,
};
export default TopAccessories;
