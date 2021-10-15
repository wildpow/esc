import styled from "@emotion/styled";
import { BreadWrapper } from "../BreadCrumbs";
import {
  colors,
  fonts,
  boxShadow,
  FadeInAnimation,
} from "../../styles/theme.styled";

export const NewBread = styled(BreadWrapper)`
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 568px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1022px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1300px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const MattListWrapper = styled.div`
  ${FadeInAnimation}
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  .collapseAll {
    display: flex;
    justify-content: center;
    gap: 10px;
    button {
      width: 30px;
      color: ${colors.brandBlue};
      border: none;
      height: 30px;

      background-color: transparent;
      transition: transform 0.2s ease;
      :hover {
        transform: scale(1.25);
      }
      :active {
        transform: scale(0.95);
      }
    }
  }
  .mattList__sortResults {
    display: flex;
    border-bottom: 4px solid ${colors.brandRed};
    padding: 10px 0px;
    padding-right: 20px;
    padding-left: 5px;
    background-color: white;
    margin: 0 7px;
    box-shadow: ${boxShadow.default};
    justify-content: space-between;
    align-items: center;
    align-content: center;
    justify-items: center;
    h4 {
      margin: 0;
      font-family: ${fonts.sans};
    }
  }
  .mattList__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 70%;
    }
    @media screen and (min-width: 1024px) {
      width: 80%;
    }
  }
  .mattList__flex {
    border-top: 8px solid ${colors.brandBlue};
    padding-top: 20px;
    padding-bottom: 0px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .mattList__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-auto-rows: minmax(300px, 427px);
    grid-gap: 1rem;
    margin-left: 7px;
    margin-right: 7px;
  }
  .noFilter {
    background-color: ${colors.white};
    box-shadow: ${boxShadow.md};
    font-family: ${fonts.sans};
    margin-left: 7px;
    margin-right: 7px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    h3 {
      border-bottom: 4px solid ${colors.red[800]};
    }
    border-bottom: 4px solid ${colors.red[800]};
  }
`;
