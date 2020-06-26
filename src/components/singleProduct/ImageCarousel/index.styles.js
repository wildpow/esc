import styled from "styled-components";
import {
  ImgWrapperPr1nt,
  SmallImgHolderPr1nt,
  SmImgPr1nt,
  LargeImgPr1nt,
  BigBannerPr1nt,
} from "../../../styles/_pr1nt/main";
import { Banner } from "../../mattressList/mattThumbNail/mattThumb.Styles";

export const ImgWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  ${ImgWrapperPr1nt}
`;

export const SmallImgHolder = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-self: center;
  ${SmallImgHolderPr1nt}
`;

export const SmImgWrap = styled.div`
  color: white;
  width: 83px;
  height: 83px;
  /* @media (min-width: 360px) {
    width: 60px;
    height: 60px;
  } */
  @media (min-width: 500px) {
    /* width: 83px;
    height: 83px; */
    width: calc(350px / 3);
    height: 116px;
  }
  @media (min-width: 768px) {
    width: calc(350px / 3);
    height: 116px;
  }
  @media (min-width: 1024px) {
    width: 168px;
    width: calc(500px / 3);
    height: 167px;
  }
  border: 2px solid white;
  &:hover {
    border: 2px solid black;
  }
  ${SmImgPr1nt}
`;

export const LargeImgWrap = styled.div`
  color: white;
  position: relative;
  width: 150px;
  height: 150px;
  width: 250px;
  height: 250px;
  /* @media (min-width: 360px) {
    width: 180px;
    height: 180px;
  } */
  @media (min-width: 500px) {
    /* width: 250px;
    height: 250px; */
    width: 350px;
    height: 350px;
  }
  /* @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  } */
  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  ${LargeImgPr1nt}
`;

export const BigBanner = styled(Banner)`
  font-size: 0.6rem;
  @media (min-width: 360px) and (orientation: portrait) {
    font-size: 0.7rem;
    margin-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 85%;
  }
  @media (max-width: 736px) and (orientation: landscape) {
    font-size: 0.8rem;
    margin-left: 0px;
    width: 80%;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 5px;
  }
  @media (min-width: 810px) and (orientation: landscape) {
    margin-left: 0;
    width: 75%;
    font-size: 1.1rem;
    padding-top: 7px;
    padding-bottom: 7px;
  }
  @media (min-width: 768px) and (orientation: portrait) {
    font-size: 1.1rem;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 10px;
    padding-right: 0px;
    width: 75%;
  }
  @media (min-width: 1024px) and (orientation: landscape) {
    font-size: 1.3rem;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 20px;
    width: 70%;
  }
  ${BigBannerPr1nt}
`;
