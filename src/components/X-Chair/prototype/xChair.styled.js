import styled from "@emotion/styled";
import { fonts, fontSize, spacing } from "../../../styles/theme.styled";

export const OptionsWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 40px;
  padding-top: ${({ model }) => (model ? "0" : "20px")};
  input {
    display: none;
  }
  label {
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    outline: 1px solid #dadada;
    display: block;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  label::after {
    height: 4px;
    position: absolute;
    content: "";
    width: calc(100% + 2px);
    left: -1px;
    bottom: 0;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
  input:hover + label::after {
    background-color: #ec1221;
  }
  input:checked + label::after {
    background-color: #ec1221;
  }
  label::before {
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
  label div {
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }
  input:hover + label {
    border-top: 1px solid #ec1221;
    border-right: 1px solid #ec1221;
    border-left: 1px solid #ec1221;
  }

  input:checked + label {
    pointer-events: none;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
  input:checked + label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }
  input:checked:checked + label div {
    transform: scale(1);
    z-index: -1;
  }

  .singleOption {
    max-width: 150px;
  }
  .modelGif {
    background-size: cover;
    object-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .modelGifWrapper {
    width: 150px;
    height: 103px;
    img {
      width: 150px;
      height: 103px;
    }
  }
  .modelsWrapper {
    display: flex;
  }
  .titleContainer {
    text-align: center;
    font-family: ${fonts.sans};
    h4 {
      font-weight: 300;
      margin-bottom: 4px;
      margin-top: ${spacing[3]};
    }
    span {
      font-weight: 500;
    }
  }
  .headrest {
    padding-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      margin: 0;
    }
  }
`;

export const FeatureTitle = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: ${fonts.sans};
  h3 {
    margin: 0;
    padding-left: 10px;
  }
  span {
    width: 30px;
    height: 30px;
    color: white;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OptionContainer = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  h3 {
    font-size: ${fontSize.lg};
    font-family: ${fonts.sans};
    margin-bottom: 5px;
    margin-left: 4px;
    span {
      padding: 5px 7px;
      color: white;
      background-color: gray;
    }
  }
`;
