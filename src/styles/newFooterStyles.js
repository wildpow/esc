import styled from "styled-components";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { Link } from "gatsby";

// const ImgHover = styled.img`
//   color: white;
//   transition: transform 0.25s ease-in;
//   &:hover {
//     transform: scale3d(1.1, 1.1, 1);
//   }
// `;

// export const GraphIcon = styled(ImgHover)`
//   max-width: 10em;
//   padding-right: 12px;
//   @media (min-width: 768px) {
//     max-width: 13em;
//   }
// `;

export const BottomIconWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  @media (min-width: 375px) {
    justify-content: space-around;
  }
  @media (min-width: 667px) {
    justify-content: space-evenly;
  }
  @media (min-width: 1024px) {
    justify-content: space-evenly;
  }
  @media print {
    display: none;
  }
`;

export const BBLink = styled(OutboundLink)`
  transition: transform 0.25s ease-in;
  &:hover {
    transform: scale3d(1.1, 1.1, 1);
  }
  img {
    max-width: 9.2rem;
    height: 3.5em;
  }
  @media (min-width: 768px) {
    img {
      max-width: 14rem;
      height: 4.1em;
    }
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const BottomLinkWrapper = styled.div`
  font-family: ${props => props.theme.MainFont1};
  font-weight: 400;
  display: flex;
  width: 100%;
  margin-top: 12px;
  font-size: 0.9em;
  justify-content: space-around;
  text-align: cetner;
  margin-bottom: 8px;
  @media (min-width: 768px) {
    font-size: 1.3em;
    margin-top: 22px;
    margin-bottom: 12px;
  }
  @media print {
    display: none;
  }
`;

export const BottomLinks = styled(Link)`
  color: ${props => props.theme.mainColor1};
  transition: color 0.2s ease-in;
  &:hover {
    color: ${props => props.theme.mainColor2};
  }
`;

export const Bird667Container = styled.div`
  display: none;
  @media (min-width: 667px) {
    display: block;
  }
  @media print {
    display: block;
  }
`;

export const BirdContainerSmall = styled.div`
  display: block;
  @media (min-width: 667px) {
    display: none;
  }
  @media print {
    display: none;
  }
`;
