import React from "react";
import styled from "styled-components";
import PropTypes, { string } from "prop-types";
import { FadeIn } from "../../styles/mainStyles";
import {
  fonts,
  fontSize,
  colors,
  // breakpoints,
  // spacing,
} from "../../utils/styles";
import ForwardArrow from "../../assets/arrow-right-solid.svg";
import { PrimaryButton } from "../shared/Buttons";

const FooterButton = styled(PrimaryButton)`
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

const TopItemsRoot = styled.article`
  display: flex;
  flex-direction: column;
  animation-name: ${FadeIn};
  ${(props) => props.theme.Animation}
  justify-content: space-between;
  background-color: ${(props) => props.theme.newColor1};
  margin-top: 15px;
`;

const HeadLine = styled.div`
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

const ItemsWrapper = styled.div`
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

const P = styled.p`
  font-family: ${(props) => props.theme.MainFont3};
  text-align: justify;
  text-justify: inter-character !important;
  margin-bottom: 0;
  font-weight: 300;
  margin-top: 0;
  background-color: white;
  padding: 5px 15px 5px 15px;
  font-size: 1rem;
  line-height: 1.55rem;
  color: ${(props) => props.theme.newColor2};

  @media (min-width: 640px) {
    padding: 5px 15px 5px 15px;
    line-height: 1.8rem;
    font-size: 1.2rem;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    line-height: 2rem;
  }
  @media (min-width: 1024px) {
    padding: 5px 15px 5px 15px;
    font-size: 1.4rem;
    line-height: 2.1rem;
  }
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.gray["100"]};
  padding-top: 20px;
`;

const TopItems = ({
  paragraph,
  headerText,
  footerButtonUrl,
  footerButtonText,
  children,
}) => {
  return (
    <TopItemsRoot>
      <HeadLine>
        <h2>{headerText}</h2>
      </HeadLine>
      <ItemsWrapper>{children}</ItemsWrapper>
      {paragraph && <P>{paragraph}</P>}
      <FooterWrapper>
        <FooterButton to={footerButtonUrl}>
          {footerButtonText}
          <ForwardArrow />
        </FooterButton>
      </FooterWrapper>
    </TopItemsRoot>
  );
};

TopItems.defaultProps = {
  headerText: "This is The Header Text",
  footerButtonText: "Footer button Text",
  footerButtonUrl: "/about",
  paragraph: undefined,
};

TopItems.propTypes = {
  headerText: string,
  footerButtonText: string,
  footerButtonUrl: string,
  paragraph: string,
  children: PropTypes.element.isRequired,
};

export default TopItems;
