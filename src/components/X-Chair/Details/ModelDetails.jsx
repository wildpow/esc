/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { fonts, fontSize, spacing } from "../../../styles/theme.styled";

const ModelDetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-family: ${fonts.sans};
  max-width: 1400px;
  margin: 0 auto;
  column-gap: ${spacing[10]};
  .singleModel {
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
    height: 58px;
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
`;
export default function ModelDetails({ logoImg }) {
  return (
    <ModelDetailWrapper>
      <div className="singleModel">
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
      <div className="singleModel">
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
      <div className="singleModel">
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
