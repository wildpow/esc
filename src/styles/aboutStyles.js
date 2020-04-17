import styled from "styled-components";
import { FadeIn, FlexCol, FlexRow } from "./mainStyles";

export const Main = styled.div`
  margin-top: 15px;
  background-color: white;
  padding-left: 5px;
  padding-right: 5px;
  box-shadow: var(--box-shadow);
  @media (min-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const PicHolder = styled.div`
  justify-content: space-between;
  @media (min-width: 568px) {
    justify-content: space-evenly;
  }
  @media (min-width: 640px) {
    justify-content: space-around;
  }
  @media (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const StoreImg = styled.img`
  color: white;
  width: 100px;
  height: 100px;
  @media (min-width: 360px) {
    width: 105px;
    height: 100px;
  }
  @media (min-width: 375px) {
    width: 110px;
    height: 100px;
  }
  /* @media (min-width: 412px) {
    width: 125px;
    height: 100px;
  } */
  @media (min-width: 411px) {
    width: 125px;
    height: 100px;
  }
  @media (min-width: 568px) {
    width: 155px;
    height: 120px;
  }
  @media (min-width: 731px) {
    width: 200px;
    height: 160px;
  }
  @media (min-width: 768px) {
    width: 218px;
    height: 200px;
  }
  @media (min-width: 993px) {
    width: 288px;
    height: 230px;
  }
  @media (min-width: 1200px) {
    width: 358px;
    height: 280px;
  }
  @media (min-width: 1300px) {
    width: 383px;
    height: 300px;
  }
  @media (min-width: 1400px) {
    width: 420px;
    height: 350px;
  }
`;

export const MapImg = styled.img`
  color: white;
  width: 105px;
  height: 99px;
  @media (min-width: 360px) {
    width: 130px;
    height: 100px;
  }
  @media (min-width: 375px) {
    width: 135px;
    height: 100px;
  }
  @media (min-width: 412px) {
    width: 145px;
    height: 100px;
  }
  @media (min-width: 568px) {
    width: 170px;
    height: 120px;
  }
  @media (min-width: 731px) {
    width: 220px;
    height: 160px;
  }
  @media (min-width: 768px) {
    width: 250px;
    height: 200px;
  }
  @media (min-width: 993px) {
    width: 340px;
    height: 230px;
  }
  @media (min-width: 1200px) {
    width: 420px;
    height: 280px;
  }
  @media (min-width: 1300px) {
    width: 470px;
    height: 300px;
  }
  @media (min-width: 1400px) {
    width: 496px;
    height: 350px;
  }
`;

export const Address = styled.p`
  font-family: var(--font-headline);
  background: var(--color-red);
  color: var(--color-white);
  text-align: center;
  font-size: 0.9rem;
  padding: 10px;
  line-height: 1.2rem;
  margin-top: 0;
  margin-bottom: 0;
  @media (min-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.5rem;
  }
  @media (min-width: 1200px) {
    line-height: 1.6rem;
    line-height: 2rem;
  }
`;

export const Span = styled.span`
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const RegularParagraph = styled.p`
  font-family: var(--font-copy);
  font-weight: 300;
  padding-left: 12px;
  padding-right: 12px;
  line-height: 1.4rem;
  font-size: 1rem;
  text-indent: 30px;
  padding-top: 10px;
  padding-bottom: 0px;
  @media (min-width: 768px) {
    margin-bottom: 0;
    padding-right: 60px;
    padding-left: 60px;
    font-size: 1.2rem;
    line-height: 1.6rem;
  }
  @media (min-width: 1024px) {
    margin-bottom: 0;
    padding-right: 80px;
    padding-left: 80px;
    font-size: 1.6rem;
    line-height: 1.95rem;
  }
`;

export const BlueWrapper = styled.div`
  background-color: var(--color-blue);
  color: var(--color-white);
  margin-top: 20px;
  @media (min-width: 1024px) {
    margin-top: 40px;
  }
`;

export const SecondP = styled.p`
  text-shadow: var(--text-shadow);
  font-family: var(--font-headline);
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.6rem;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  font-weight: 300;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  @media (min-width: 1024px) {
    line-height: 2rem;
    font-size: 1.8rem;
  }
`;

export const PopImg = styled.img`
  color: white;
  max-width: 19rem;
  margin: auto;
  @media (min-width: 360px) {
    max-width: 20rem;
  }
  @media (min-width: 700px) {
    max-width: 50rem;
  }
`;
