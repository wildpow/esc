import styled from "@emotion/styled";
import { fonts, fontSize } from "../../../styles/theme.styled";

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
