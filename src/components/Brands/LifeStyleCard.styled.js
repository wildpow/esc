import { styled, css, theme } from "twin.macro";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export const BrandLink = styled(Link)`
  position: relative;
  width: 100%;
  overflow: hidden;
  position: relative;
  -webkit-tap-highlight-color: #1565c057;
  &:hover .overlay,
  &:focus .overlay {
    opacity: 1;
  }
  &:hover .brand,
  &:focus .brand {
    transform: translate(-50%, -80%);
  }
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;
  /* ASK WILL */
  @media screen and (max-width: 768px) {
    transition: box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
      transform 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    .overlay {
      opacity: 1;
    }
    .brand {
      transform: translate(-50%, -80%);
    }
    transition: transform 0.25s ease-in;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

export const BgImage = styled(GatsbyImage)`
  position: absolute;
  display: block;
  filter: brightness(85%) saturate(135%);
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ height }) => height};
  & > img {
    object-fit: cover !important;
    object-position: 0% 0% !important;
    font-family: "object-fit: cover !important; object-position: 0% 0% !important;";
  }

  @media screen and (max-width: 600px) {
    height: 60px;
  }
`;

export const BrandLogo = css`
  position: absolute;
  display: block;
  width: 100%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
  transition: All 0.3s ease-in-out;
  right: 0;
  width: 250px;
  bottom: 10%;
  max-width: 245px;
  z-index: 200;
  @media screen and (max-width: 550px) {
    width: 200px;
  }
`;

export const Content = css`
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  text-align: center;
  background: rgba(20, 20, 40, 0.5);
  bottom: 0;
  color: white;
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
  display: flex;
  justify-content: center;
  align-content: flex-end;
  align-items: flex-end;
  font-family: ${theme`fontFamily.serif`};
  font-size: 1.1rem;
  line-height: 1.7rem;
  text-shadow: 2px 2px 4px rgba(10, 10, 10, 1);
  h4 {
    padding-left: 5px;
    padding-right: 5px;
    color: white;
    font-weight: 300;
  }
  @media screen and (max-width: 568px) {
    h4 {
      font-size: 1rem;
      line-height: 1.3rem;
      padding-bottom: 10px;
      padding-top: 10px;
    }
  }
  @media screen and (max-width: 768px) {
    background: rgba(20, 20, 40, 0.1);
    h4 {
      background: rgba(20, 20, 40, 0.6);
      padding-top: 5px;
      padding-bottom: 5px;
      margin: 0;
    }
  }
`;
