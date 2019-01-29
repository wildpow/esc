// import { NavLink } from 'gatsby';
import { Link } from "gatsby";

import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (min-width: 1300px) {
    justify-content: space-around;
  }
`;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 1022px) {
    display: block;
    padding-top: 40px;
  }
`;

export const StyledLinkLeft = styled(Link)`
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.3rem;
  text-decoration: none;
  font-family: ${props => props.theme.MainFont2};
  margin-left: 20px;
  color: ${props => props.theme.mainColor1};
  transition: all 0.2s ease-in;
  &:hover {
    border-top: 8px solid ${props => props.theme.mainColor2};
  }
  &.active {
    border-bottom: 8px solid ${props => props.theme.mainColor2};
    border-top: 0px solid ${props => props.theme.mainColor2};
  }
  @media (min-width: 1300px) {
    margin-left: 0;
    font-size: 1.65rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledLinkRight = styled(Link)`
  font-family: ${props => props.theme.MainFont2};
  color: ${props => props.theme.mainColor1};
  transition: all 0.2s ease-in;
  margin-right: 20px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.3rem;
  text-decoration: none;
  &:hover {
    border-top: 8px solid ${props => props.theme.mainColor2};
  }
  &.active {
    border-bottom: 8px solid ${props => props.theme.mainColor2};
    border-top: 0px solid ${props => props.theme.mainColor2};
  }

  @media (min-width: 1300px) {
    margin-right: 0;
    font-size: 1.6rem;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
