/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";

const ModelDetailWrapper = styled.div`
  display: flex;
  .singleModel {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: calc(100% / 3);
  }
  .logo {
    width: 70px;
  }
  .featureImg {
    width: 200px;
  }
`;
export default function ModelDetails({ logoImg }) {
  const pop = "";
  return (
    <ModelDetailWrapper>
      <div className="singleModel">
        <div className="logo">
          <GatsbyImage image={getImage(logoImg.image)} alt={logoImg.alt} />
        </div>
        <h4>Office Chair with Dynamic Variable Lumbar (DVL)</h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-first.png"
            alt="Office Chair with Dynamic Variable Lumbar (DVL)"
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
          />
        </div>
        <h4>Heat and Massage chair</h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-second.png"
            alt="Heat and Massage chair"
          />
        </div>
        <ul>
          <li>4 Combinations of Massage</li>
          <li>Therapeutic Heating Technology</li>
          <li>Dynamic Variable Lumbar (DVL) ™ support</li>
          <li>10 Ergonomic Features</li>
        </ul>
      </div>
      <div className="singleModel">
        {" "}
        <div className="otherLogo">
          <StaticImage
            src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
            alt="Heat and Massage chair"
          />
        </div>
        <h4>Cooling, Heat & Massage Chair</h4>
        <div className="featureImg">
          <StaticImage
            src="../../../images/xChair/modelFeatureList/product-description-third.png"
            alt="Cooling, Heat & Massage Chair"
          />
        </div>
        <ul>
          <li>Body temperature regulation</li>
          <li>Dual fans providing active cooling air flow</li>
          <li>4 Combinations of Massage</li>
          <li>Dynamic Variable Lumbar (DVL) ™ support</li>
          <li>10 Ergonomic Features</li>
        </ul>
      </div>
    </ModelDetailWrapper>
  );
}
