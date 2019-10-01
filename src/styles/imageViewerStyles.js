import styled from "styled-components";
import { FlexCol, FlexRow } from "./mainStyles";
import {
  ImgWrapperPr1nt,
  SmallImgHolderPr1nt,
  SmImgPr1nt,
  LargeImgPr1nt,
} from "./_pr1nt/main";

export const ImgWrapper = styled(FlexCol)`
  margin: 10px 0 0 0;
  height: 200px;
  @media (min-width: 360px) {
    height: 240px;
    margin: 0px;
  }
  @media (min-width: 500px) {
    height: 340px;
  }
  @media (min-width: 768px) {
    height: 470px;
  }
  @media (min-width: 1024px) {
    height: 660px;
    margin-right: 10px;
  }
  ${ImgWrapperPr1nt}
`;

export const SmallImgHolder = styled(FlexRow)`
  margin-top: ${props => (props.base ? "0px" : "10px")};
  justify-content: center;
  /* margin-top: 10px; */
  align-self: center;
  top: 150px;
  @media (min-width: 360px) {
    top: 180px;
    margin-top: 0px;
  }
  @media (min-width: 500px) {
    top: 250px;
  }
  @media (min-width: 768px) {
    top: 350px;
  }
  @media (min-width: 1024px) {
    top: 500px;
  }
  ${SmallImgHolderPr1nt}
`;

export const SmImg = styled.img`
  color: white;
  width: 50px;
  height: 50px;
  @media (min-width: 360px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 500px) {
    width: 83px;
    height: 83px;
  }
  @media (min-width: 768px) {
    width: 116px;
    height: 116px;
  }
  @media (min-width: 1024px) {
    width: 167px;
    height: 167px;
  }
  border: 2px solid white;
  &:hover {
    border: 2px solid black;
  }
  ${SmImgPr1nt}
`;

export const LargeImg = styled.img`
  color: white;
  width: 150px;
  height: 150px;
  @media (min-width: 360px) {
    width: 180px;
    height: 180px;
  }
  @media (min-width: 500px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  ${LargeImgPr1nt}
`;
