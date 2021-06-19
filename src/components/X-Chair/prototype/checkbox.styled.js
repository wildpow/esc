import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { fonts } from "../../../styles/theme.styled";

const notAvailable = ({ colorCheck }) =>
  colorCheck &&
  css`
    pointer-events: none;
    .container:after {
      position: absolute;
      content: "Not available in this color";
      top: -1px;
      left: -1px;
      background-color: white;
      display: flex;
      align-items: center;
      text-align: center;
      font-family: ${fonts.sans};
      opacity: 0.8;
      font-weight: 700;
      width: calc(2px + 100%);
      height: calc(1px + 100%);
    }
    .borderOneInput {
      pointer-events: none;
    }
  `;

const Checkbox = styled.div`
  ${notAvailable};

  background-color: white;
  padding: 20px;
  .borderOneInput {
    display: none;
  }
  .borderOneLabel {
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    /* border-bottom: 4px solid transparent; */
    outline: 1px solid #dadada;
    /* padding: 10px 10px 0 10px; */
    display: block;
    position: relative;
    /* margin: 10px; */
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .borderOneLabel::after {
    height: 4px;
    position: absolute;
    content: "";
    width: calc(100% + 2px);
    left: -1px;
    bottom: 0;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
  .borderOneInput:hover + .borderOneLabel::after {
    background-color: #ec1221;
  }
  .borderOneInput:checked + .borderOneLabel::after {
    background-color: #ec1221;
  }
  .borderOneLabel::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -12px;
    left: -12px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 31px;
    transition-duration: 0.4s;
    transform: scale(0);
    z-index: 10;
  }
  .borderOneLabel div {
    height: 100px;
    width: 120px;
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }
  .borderOneInput:hover + label {
    border-top: 1px solid #ec1221;
    border-right: 1px solid #ec1221;
    border-left: 1px solid #ec1221;
    /* border-bottom: 4px solid #ec1221; */
  }

  .borderOneInput:checked + label {
    pointer-events: none;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    /* border-bottom: 4px solid #ec1221; */
  }
  .borderOneInput:checked + label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }
  .borderOneInput:checked:checked + label div {
    transform: scale(1);
    z-index: -1;
  }
`;

export default Checkbox;
