import styled from "styled-components";
import { Link } from "gatsby";

export const LinkWrapper = styled.div`
  border: ${props => props.theme.Border};

  display: flex;
  justify-content: center;
  margin: 2px;
  width: 150px;
  height: 216px;
  margin-top: 15px;
  box-shadow: ${props => props.theme.newBoxShadow};

  border-radius: 0.14rem;
  background-color: white;
  transition: all 0.15s ease-in-out;
  @media (min-width: 360px) {
    margin: 5px;
    width: 165px;
    height: 235px;
  }
  @media (min-width: 414px) {
    width: 185px;
  }
  @media (min-width: 768px) {
    width: 340px;
    height: 365px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 360px;
    margin-right: 10px;
    margin-bottom: 20px;
  }
  &:hover {
    z-index: 999;
    transform: scale3d(1.05, 1.05, 1);
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #1565c0;
`;

export const Divy = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const MattImg = styled.img`
  color: white;
  margin: 0 auto 0px auto;
  width: 110px;
  height: 110px;
  @media (min-width: 360px) {
    width: 130px;
    height: 130px;
  }
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
  @media (min-width: 1022px) {
    width: 250px;
    margin-bottom: -10px;
  }
`;

export const PriceRange = styled.div`
  color: ${props => props.theme.newColor2};
  font-weight: 400;
  font-family: ${props => props.theme.MainFont1};
  font-size: 0.7rem;
  text-align: center;
  @media (min-width: 360px) {
    font-size: 0.8rem;
  }
  @media (min-width: 768px) {
    font-size: 1rem;
    letter-spacing: 0.05rem;
  }
`;

export const Name = styled.div`
  font-family: ${props => props.theme.MainFont1};
  text-decoration: none;
  font-weight: 400;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 10px;
  padding-top: 5px;
  font-size: 0.9rem;
  margin: 0;
  @media (min-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    font-size: 1.2rem;
    margin: 0;
    letter-spacing: 0.05rem;

    /* letter-spacing: 0.05rem; */
  }
`;
