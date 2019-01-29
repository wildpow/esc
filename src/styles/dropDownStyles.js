import styled from "styled-components";
import { FlexCol, FlexRow } from "./mainStyles";

export const Wrapper = styled(FlexCol)`
  justify-content: center;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    flex-direction: column;
    margin-left: 20px;
  }
`;

export const WholeThing = styled.div`
  outline: none;
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

export const ButtonWrapper = styled.div`
  outline: none;
  margin: auto;
  padding: 0;
  outline: none;
`;

export const TopButton = styled.button`
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont2};
  color: white;
  border: none;
  cursor: pointer;
  outline: none !important;
  padding: 7px;
  font-size: 0.7rem;
  border-radius: 0.11rem;
  border-bottom: 2px solid white;
  width: 125px;
  @media (min-width: 360px) {
    font-size: 0.8rem;
    padding: 8px;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 9px;
    width: 150px;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 16px;
    width: 243px;
  }
  &:hover {
    background-color: ${props => props.theme.mainColor2};
    outline: none !important;
  }
  &:focus {
    background: ${props => props.theme.mainColor2};
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.mainColor1};
  font-family: ${props => props.theme.MainFont2};
  color: white;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 6px;
  font-size: 0.7rem;
  border-bottom: 2px solid white;
  border-radius: 0.11rem;
  &:hover {
    background-color: ${props => props.theme.mainColor2};
  }
  &:focus {
    background: ${props => props.theme.mainColor2};
  }
  @media (min-width: 360px) {
    padding: 8px;
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 9px;
  }
  @media (min-width: 1024px) {
    font-size: 1.6rem;
    padding: 16px;
  }
`;

export const DropDownWrapper = styled(FlexCol)`
  box-shadow: ${props => props.theme.BoxShadow};
  outline: none;
  position: absolute;
  background-color: ${props => props.theme.mainColor1};
  min-width: 80px;
  z-index: 1;
  &:hover {
    background-color: #f1f1f1;
  }
  @media (min-width: 768px) {
    min-width: 100px;
  }
  @media (min-width: 1024px) {
    min-width: 200px;
  }
`;

export const Price = styled.div`
  font-family: ${props => props.theme.MainFont2};
  font-size: 0.8rem;
  padding: 0;
  padding-top: 5px;
  padding-left: 0px;
  width: 110px;
  height: 30px;
  @media (min-width: 360px) {
    width: 130px;
    height: 30px;
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    padding-left: 25px;
    font-size: 1.1rem;
    width: 200px;
    height: 60px;
  }
  @media (min-width: 1024px) {
    font-size: 1.7rem !important;
    width: 250px !important;
    height: 60px;
    margin-top: 0;
    margin-bottom: 0;
  }
  @media (min-width: 1300px) {
    padding-left: 35px;
    height: 70px;
    width: 300px !important;
    font-size: 30rem;
    padding-top: 20px;
  }
`;

export const Sale = styled.div`
  text-decoration: line-through;
  text-decoration-color: ${props => props.theme.mainColor2};
  -webkit-text-decoration-color: ${props => props.theme.mainColor2};
  -moz-text-decoration-color: ${props => props.theme.mainColor2};
  font-size: 0.5rem;
  @media (min-width: 1024px) {
    font-size: 1rem;
  }
  @media (min-width: 1300px) {
    font-size: 1.2rem;
    margin-right: 20px;
  }
`;

export const Row = styled(FlexRow)`
  justify-content: space-around;
  width: 130px;
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
  @media (min-width: 1300px) {
    justify-content: center;
    width: 180px;
  }
`;

export const RegularPrice = styled.div`
  @media (min-width: 1300px) {
    font-size: 2.4rem;
  }
`;
