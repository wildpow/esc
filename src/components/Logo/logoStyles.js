import styled from "@emotion/styled";
import { Link } from "gatsby";
import { ReadersPr1nt } from "../../styles/_pr1nt/main";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-top: -15px;
  margin: auto;
`;

export const ReadersChoice = styled.img`
  max-width: 75px;
  float: left;
  position: absolute;
  left: 9px;
  top: 39px;
  z-index: 51;
  opacity: ${props => (props.menuToggle ? 0.2 : 1)};
  transition: transform 0.25s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  @media (min-width: 568px) {
    left: 17px;
    top: 34px;
    max-width: 88px;
  }
  @media (min-width: 768px) {
    max-width: 138px;
    top: 38px;
    left: 21px;
  }
  @media (min-width: 1024px) {
    float: right;
    left: auto;
    max-width: 140px;
    right: 27px;
    top: 118px;
  }
  @media (min-width: 1200px) {
    right: 60px;
  }
  @media (min-width: 1300px) {
    right: 125px;
    top: 124px;
  }
  @media (min-width: 1400px) {
    right: 140px;
  }
  @media (min-width: 1500px) {
    right: 190px;
  }
  @media (min-width: 1600px) {
    right: 256px;
  }
  @media (min-width: 1800px) {
    right: 300px;
  }
  ${ReadersPr1nt}
`;
