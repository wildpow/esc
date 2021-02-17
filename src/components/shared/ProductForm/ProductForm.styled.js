import styled from "styled-components";
import {
  colors,
  // radius,
  spacing,
  fonts,
  breakpoints,
  fontSize,
} from "../../../utils/styles";

export const ProductFormRoot = styled.form`
  display: flex;
  flex-wrap: wrap;
  padding: ${spacing["2"]} ${spacing["2"]} 0;
  padding-top: 0;
  .fieldset {
    display: flex;
  }
  @media (min-width: ${breakpoints.md}) {
    padding: ${spacing["10"]} ${spacing["8"]} 0;
  }

  @media (min-width: ${breakpoints.lg}) {
    /* justify-content: flex-start;
    min-width: 420px; */
  }
  @media (min-width: ${breakpoints.xl}) {
    max-width: 600px;
    /* flex-wrap: nowrap;
    flex-direction: column;
    justify-content: center;
    justify-content: flex-start; */
  }
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
  /* @media (min-width: ${breakpoints.xsm}) {
    h4 {
      font-size: ${fontSize["2xl"]};
    }
    small {
      font-size: ${fontSize.xl};

      color: ${colors.red["900"]};
    }
  } */
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
