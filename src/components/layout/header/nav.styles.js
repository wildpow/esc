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
    display: flex;
    padding-top: 40px;
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 700;
  font-size: 1.3rem;
  color: ${props => props.theme.mainColor1};
  text-decoration: none;
  /* transition: border-top 0.2s ease-in; */
  padding-left: 10px;
  padding-right: 10px;
  margin-right: ${props => (props.right ? "20px" : "0px")};
  margin-left: ${props => (props.left ? "20px" : "0px")};
  /* &:hover {
    border-top: 4px solid ${props => props.theme.mainColor2};
  } */
  /* transition: all .2s ease-in-out !important; */
  position: relative;
  border-bottom: 6px solid transparent;
  text-decoration: none;
  :hover{
    color: ${props => props.theme.mainColor1};
  }
  :before {
  content: "";
  position: absolute;
  width: 100%;
  height: 6px;
  bottom: -6px;
  left: 0;
  background-color: ${props => props.theme.mainColor2};
  visibility: hidden;
  transform: scaleX(0);
  transition: all .2s ease-in-out 0s;
}
:hover:before {
  visibility: visible;
  transform: scaleX(1);
}

  @media (min-width: 1300px) {
    padding-left: 20px;
    padding-right: 20px;
    font-size: 1.45rem;
    letter-spacing: 0.03rem;
    margin-right: ${props => (props.right ? "0px" : "20px")};
    margin-left: ${props => (props.left ? "0px" : "20px")};
  }
  @media (min-width: 1400px) {
    font-size: 1.6rem;
  }
`;
