import { Link } from "gatsby";
import styled from "styled-components";

export const InfoWrapper = styled.div`
  margin-left: 10px;
  @media (min-width: 640px) {
    margin-left: 24px;
  }
`;

export const StyledLink = styled(Link)`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  /* border-radius: 5px; */
  text-decoration: none;
  /* border: ${props => props.theme.Border}; */
  /* box-shadow: ${props => props.theme.newBoxShadow}; */
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px, rgba(71, 63, 79, 0.08) 0px 2px 4px;
  transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s, transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  /* border-radius: 0.14rem; */
  background-color: white;
  color: #1565c0;
  font-weight: 300;
  transition: all 0.15s ease-in-out;
  &:hover {
    /* z-index: 999;
    transform: scale3d(1.02, 1.02, 1); */
    box-shadow: 0px 4px 8px rgba(46, 41, 51, 0.08), 0px 8px 16px rgba(71, 63, 79, 0.16);
   
    transform: translateY(-4px);
  }
`;

export const Img = styled.img`
  color: white;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  @media (min-width: 1022px) {
    max-height: 150px;
    max-width: 150px;
  }
`;

export const H3 = styled.h3`
  text-align: center;
  margin: 0 auto;
  padding-right: 10px;
  overflow-wrap: break-word;
  font-size: 1rem;
  font-weight: 400;
  @media (min-width: 765px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1022px) {
    font-size: 2rem;
  }
`;
