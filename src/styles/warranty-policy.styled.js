import styled from "@emotion/styled";
import { colors, spacing, fonts, breakpoints, fontSize } from "./theme.styled";

export const InfoPara = styled.p`
  margin: 0;
  padding-bottom: ${spacing[2]};
  font-family: ${fonts.serif};
  font-size: ${fontSize.base};
  line-height: 1.5rem /* 24px */;
  font-weight: 400;
  color: ${colors.gray[700]};
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize.xl};
    line-height: 1.75rem /* 28px */;
    padding-bottom: ${spacing[4]};
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${fontSize["2xl"]};
    line-height: 2rem /* 32px */;
    padding-bottom: ${spacing[6]};
  }
`;

export const Title = styled.h2`
  align-self: center;
  padding-top: ${spacing[2]};

  margin: 0;
  font-family: ${fonts.sans};
  font-size: ${fontSize.xl};
  border-bottom: 4px solid ${colors.blue[700]};
  color: ${colors.gray[800]};
  margin-bottom: ${spacing[6]};
  @media (min-width: ${breakpoints.phablet}) {
    font-size: ${fontSize["2xl"]};
    line-height: 2rem /* 36px */;
    margin-bottom: ${spacing[8]};
  }
  @media (min-width: ${breakpoints.sm}) {
    font-size: ${fontSize["3xl"]};
    line-height: 2.25rem /* 36px */;
    padding-top: 0;
  }
  @media (min-width: ${breakpoints.lg}) {
    font-size: ${fontSize["5xl"]};
    line-height: 1;
  }
`;
