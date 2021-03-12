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
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
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
`;

export const PriceRange = styled.div`
  font-family: ${fonts.sans};
  padding-top: 20px;
  flex: 1;
  display: flex;
  align-items: flex-end;
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
