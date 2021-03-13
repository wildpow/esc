import styled from "styled-components";
import {
  colors,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../../utils/styles";
import { Fieldset, Input, Label, SubmitButton } from "../FormElements";

export const ProductFormRoot = styled.form`
  justify-content: space-between;
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* flex-wrap: wrap; */
  max-width: 600px;
  padding-right: 10px;
  padding-left: 10px;
  /* padding: ${spacing["8"]} ${spacing["2"]}; */

  .fieldset {
    display: flex;
  }
  /* @media (min-width: ${breakpoints.md}) {
    padding: ${spacing["10"]} ${spacing["8"]} 0;
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 600px;
  } */
  flex-direction: column;
  .children {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    max-height: 500px;
    flex: 1;
    margin-bottom: 30px;
  }
  .formItems {
    display: flex;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    .children {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1150px) {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

export const PriceRange = styled.div`
  align-items: flex-end;
  font-family: ${fonts.sans};
  /* padding-top: 20px; */
  justify-content: center;
  max-height: 167px;
  flex: 1;
  display: flex;
  /* align-items: flex-end; */
  flex-direction: column;

  small {
    font-weight: ${({ compareAtPrice }) => (compareAtPrice ? 500 : 300)};
    color: ${colors.red["900"]};
    text-decoration: ${({ compareAtPrice }) =>
      compareAtPrice ? "line-through" : "initial"};
    font-size: ${fontSize.lg};
  }
  h4 {
    font-size: ${fontSize["3xl"]};
    margin-top: 0;
    color: ${colors.blue["900"]};
    margin-bottom: 0;
  }
  @media (min-width: ${breakpoints.md}) {
    h4 {
      font-size: ${fontSize["2xl"]};
    }
  }
  @media (min-width: 840px) {
    h4 {
      font-size: ${fontSize["3xl"]};
    }
  }
  @media (min-width: ${breakpoints.lg}) {
    h4 {
      font-size: ${fontSize["4xl"]};
    }
    small {
      font-size: ${fontSize.xl};
      font-weight: 300;
      color: ${colors.red["900"]};
    }
  }
  @media (min-width: ${breakpoints.xl}) {
    h4 {
      font-size: ${fontSize["5xl"]};
    }
  }
`;

export const QtyFieldset = styled(Fieldset)`
  flex-basis: 65px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: ${spacing["3"]};

  ${Label} {
    text-align: center;
  }

  ${Input} {
    padding: ${spacing["3"]} ${spacing["3"]};
    text-align: center;
  }
  input[type="number"]::-webkit-inner-spin-button {
    cursor: pointer;
  }
`;

export const SizeFieldset = styled(Fieldset)`
  flex-basis: calc(100% - ${spacing["3"]} - 70px);

  ${Label} {
    justify-content: space-between;
  }
`;

export const AddToCartButton = styled(SubmitButton)`
  align-self: flex-end;
  flex-grow: 1;
  @media print {
    display: none;
  }
`;
