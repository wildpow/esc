import { styled } from "linaria/react";

export const Main = styled.div`
  margin-top: 15px;
  margin-left: 0px;
  margin-right: 0px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1200px) {
    margin-left: 120px;
    margin-right: 120px;
  }
`;

export const CompanyWrapper = styled.article`
  box-shadow: var(--box-shadow);
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 15px;
  border-radius: 0.14rem;
  justify-content: space-around;
  background-color: white;
  @media (min-width: 660px) {
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (min-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

export const H3 = styled.h3`
  text-shadow: var(--text-shadow);
  font-family: var(--font-headline);
  background-color: var(--color-blue);
  color: var(--color-white);
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  padding: 10px 5px 10px 5px;
  letter-spacing: 0.12rem;
  font-weight: 700;
  @media (min-width: 581px) {
    font-size: 1.2rem;
    padding: 10px 30px 10px 30px;
  }
  @media (min-width: 692px) {
    text-align: left;
    word-spacing: 0.18rem;
    letter-spacing: 0.17rem;
  }
  @media (min-width: 1028px) {
    letter-spacing: 0.2rem;
    word-spacing: 0.17rem;
    font-size: 1.4rem;
  }
`;

export const Img = styled.img`
  color: white;
  max-height: 10rem;
  align-self: center;
  margin-top: 8px;
  margin-bottom: 8px;
  @media (min-width: 640px) and (max-width: 767px) {
    max-height: 14rem;
  }
  @media (min-width: 768px) {
    align-self: center;
    margin-bottom: 10px;
    margin-left: 20px;
    margin-top: 10px;
    max-height: 12rem;
  }
  @media (min-width: 1024px) {
    align-self: flex-start;
    max-height: 16rem;
  }
`;

export const InfoWrapper = styled.div`
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
  @media (min-width: 1024px) {
    justify-content: space-between;
  }
`;

export const P = styled.p`
  margin-top: 0;
  align-self: center;
  font-size: 1rem;
  line-height: 1.5rem;
  padding-left: 5px;
  padding-right: 5px;
  font-weight: 300;
  align-self: flex-start;
  font-family: var(--font-copy);
  @media (min-width: 360px) {
    padding-left: 7px;
    padding-right: 7px;
  }
  @media (min-width: 411px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 660px) and (max-width: 767px) {
    margin-right: 30px;
    margin-left: 30px;
  }

  @media (min-width: 768px) {
    margin-right: 0px;
    padding-top: 20px;
    margin-left: 20px;
    font-size: 1.3rem;
    line-height: 1.7rem;
    max-width: 500px;
  }
  @media (min-width: 1024px) {
    line-height: 1.9rem;
  }
  @media (min-width: 1300px) {
    margin-right: 60px;
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
`;

export const BottomP = styled.p`
  font-size: 0.8rem;
  margin-top: 0;
  padding-right: 5px;
  padding-left: 5px;
  text-align: center;
  margin-bottom: 0;
  padding-bottom: 5px;
  font-weight: 300;
  font-family: var(--font-headline);
`;
