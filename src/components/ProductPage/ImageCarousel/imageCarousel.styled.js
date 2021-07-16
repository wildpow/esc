import styled from "@emotion/styled";
import { colors } from "../../../styles/theme.styled";
import { Banner } from "../../ProductListing/ProductThumbnail/productThumbnail.styled";
// ../../MattressList/MattressThumbnail/MattressThumbnail.Styled
export const ImgWrapper = styled.div`
  /* display: flex;
  flex-direction: column; */
  @media print {
    height: 340px;
    margin: 0px;
  }
`;

export const SmallImgHolder = styled.div`
  display: flex;
  width: 100%;
  padding: 2px 0;
  justify-content: center;
  align-self: center;
  @media print {
    top: 220px;
    margin-top: 0px;
  }
`;

export const SmImgWrap = styled.div`
  cursor: pointer;
  color: white;
  width: 83px;
  height: 83px;
  padding: 1px;
  @media (min-width: 360px) {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 500px) {
    width: calc(350px / 3);
    height: 117px;
  }
  @media (min-width: 768px) {
    width: calc(450px / 3);
    height: 148px;
    padding: 2px;
  }
  @media (min-width: 1024px) {
    width: 168px;
    width: calc(500px / 3);
    height: 167px;
  }
  border: ${({ active }) =>
    active ? `2px solid ${colors.gray[400]}` : "2px solid white"};
  transition: all 0.2s ease;
  &:hover {
    border: 2px solid ${colors.gray[700]};
  }
  @media print {
    width: 83px;
    height: 83px;
  }
`;

export const LargeImgWrap = styled.div`
  color: white;
  position: relative;
  width: 150px;
  height: 150px;
  width: 250px;
  height: 250px;
  @media (min-width: 380px) {
    width: 350px;
    height: 350px;
  }
  @media (min-width: 768px) {
    /* width: 250px;
    height: 250px; */
    width: 450px;
    height: 450px;
  }
  /* @media (min-width: 768px) {
    width: 350px;
    height: 350px;
  } */
  @media (min-width: 1024px) {
    width: 500px;
    height: 500px;
  }
  @media print {
    width: 300px;
    height: 250px;
  }
`;

export const BigBanner = styled(Banner)`
  font-size: 0.8rem;
  @media (min-width: 360px) and (orientation: portrait) {
    font-size: 1rem;
    margin-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 10px;
    padding-right: 10px;
    width: 85%;
  }
  @media (max-width: 736px) and (orientation: landscape) {
    font-size: 1rem;
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
  @media print {
    width: 100%;
    padding-top: 0;
    font-size: 1rem;
    border-bottom: 4px solid ${colors.brandRed};
    color: black;
    text-align: left;
    padding-bottom: 2px;
    font-weight: bold;
  }
`;
