/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  boxShadow,
  colors,
  fonts,
  fontSize,
  spacing,
} from "../../../styles/theme.styled";

const ModelDetailWrapper = styled.div`
  --gutter: 1.5rem;
  --bg-color: #edf2f7;
  --speed: 0.3s;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: ${fonts.sans};
  max-width: 1400px;
  margin: 0 auto;
  column-gap: ${spacing[10]};
  margin-bottom: ${spacing[10]};
  .item {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    /* width: calc(100% / 3); */
    max-width: 400px;
  }
  .logo {
    width: 70px;
  }
  .featureImg {
    max-width: 400px;
  }
  h4 {
    margin: 0;
    height: 50px;
    max-width: 400px;
    text-align: center;
    font-weight: 300;
    font-size: ${fontSize.xl};
  }
  .otherLogo {
    max-width: 250px;
  }
  ul {
    padding-left: ${spacing[4]};
    align-self: flex-start;
    font-weight: 400;
    li {
      margin-bottom: ${spacing[2]};
    }
  }
  @media (max-width: 768px) {
    :before,
    :after {
      content: "";
      width: 10px;
    }

    grid-gap: calc(var(--gutter) * 1.5 + 1vw);
    grid-template-columns: 1rem;
    grid-template-rows: minmax(10rem, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: 320px;
    overflow-x: scroll;
    scroll-snap-type: x proximity;
    scroll-snap-points-x: repeat(100%);
    scroll-snap-type: mandatory;
    scroll-snap-destination: 100% 0%;
    /* padding-bottom: calc(0.75 * var(--gutter)); */
    /* margin-bottom: calc(-0.25 * var(--gutter)); */
    -webkit-overflow-scrolling: touch;
    scrollbar-color: #d4aa70 #e4e4e4;
    scrollbar-width: thin;
    ::-webkit-scrollbar {
      width: 15px;
    }
    scroll-behavior: smooth;
    scrollbar-width: auto;
    scrollbar-color: #cc2228 ${colors.gray[100]};

    ::-webkit-scrollbar-track {
      background-color: #e4e4e4;
    }
    ::-webkit-scrollbar-thumb {
      border: 61px solid rgba(0, 0, 0, 0.18);
      border-left: 0;
      border-right: 0;
      background-color: #cc2228;
    }
    /* scroll-padding: 20px 0px 20px 0px; */

    .item {
      ul {
        margin-bottom: 0;
      }
      /* border: 1px solid ${colors.gray[200]}; */
      background-color: white;
      box-shadow: ${boxShadow.md};
      display: flex;
      flex-direction: column;
      width: 100%;
      flex: 1;
      scroll-snap-align: center;
      padding: calc(var(--gutter) / 2 * 1.5);
      padding-top: 0;
      padding-bottom: 0%;
      transition: all var(--speed);
      font-family: ${fonts.sans};
      /* margin-left: 5rem; */
      /* :hover {
        opacity: 1 !important;
        filter: blur(0) !important;
      } */
    }
    .item:nth-last-child {
      margin-right: 5rem;
    }
  }
`;
export default function ModelDetails({ logoImg }) {
  return (
    <ModelDetailWrapper>
      <div className="item">
        <div className="logo">
          <GatsbyImage image={getImage(logoImg.image)} alt={logoImg.alt} />
        </div>
        <h4>
          Office Chair with Dynamic
          <br /> Variable Lumbar (DVL)
        </h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-first.png"
            alt="Office Chair with Dynamic Variable Lumbar (DVL)"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <ul>
          <li>Dynamic Variable Lumbar (DVL) ™ support</li>
          <li>10 Ergonomic Features</li>
        </ul>
      </div>
      <div className="item">
        <div className="otherLogo">
          <StaticImage
            src="../../../images/xChair/modelLogos/X-HMT.png"
            alt="Heat and Massage chair"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <h4>Heat and Massage chair</h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-second.png"
            alt="Heat and Massage chair"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <ul>
          <li>
            <strong> 4 Combinations of Massage</strong>
          </li>
          <li>
            <strong>Therapeutic Heating Technology</strong>
          </li>
          <li>Dynamic Variable Lumbar (DVL) ™ support</li>
          <li>10 Ergonomic Features</li>
        </ul>
      </div>
      <div className="item">
        <div className="otherLogo">
          <StaticImage
            src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
            alt="Heat and Massage chair"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <h4>Cooling, Heat & Massage Chair</h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-third.png"
            alt="Cooling, Heat & Massage Chair"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <ul>
          <li>
            <strong>Body temperature regulation</strong>
          </li>
          <li>
            <strong>Dual fans providing active cooling air flow </strong>
          </li>
          <li>
            <strong>4 Combinations of Massage </strong>
          </li>
          <li>
            <strong>Therapeutic Heating Technology</strong>
          </li>
          <li>Dynamic Variable Lumbar (DVL) ™ support</li>
          <li>10 Ergonomic Features</li>
        </ul>
      </div>
    </ModelDetailWrapper>
  );
}
