/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import hmt from "../../../images/xChair/models/hmt.gif";
import elemax from "../../../images/xChair/models/elemax.gif";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";

const ModelRoot = styled(OptionRoot)`
  .modelGif {
    background-size: cover;
    object-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .modelGifWrapper {
    width: 150px;
    height: 103px;
    img {
      width: 150px;
      height: 103px;
    }
  }
  .modelsWrapper {
    display: flex;
  }
  .optionWrapper {
    padding-top: ${({ model }) => (model ? "0" : "20px")};
  }
`;

export default function NewModelOption({ dispatch, modelCB, logoImg }) {
  return (
    <ModelRoot model>
      <FeatureTitle>
        <span>1</span>

        <h3>Choose Model</h3>
      </FeatureTitle>
      <div className="optionWrapper">
        <SingleFeature>
          <div style={{ width: "35px", margin: "0 auto", marginBottom: "3px" }}>
            <GatsbyImage image={getImage(logoImg.image)} alt={logoImg.alt} />
          </div>
          <input
            type="checkbox"
            id="standardModel"
            checked={modelCB[0]}
            onChange={() => dispatch({ type: "model", index: 0 })}
          />
          <label htmlFor="standardModel">
            <div className="modelGifWrapper">
              <StaticImage
                alt="alt stuff"
                src="../../../images/xChair/models/standard.png"
                layout="constrained"
                width={150}
                height={103}
              />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Office Chair</h4>
          </div>
        </SingleFeature>

        <SingleFeature>
          <div
            style={{ width: "120px", margin: "0 auto", marginBottom: "3px" }}
          >
            <StaticImage
              src="../../../images/xChair/modelLogos/X-HMT.png"
              alt="X-HMT option for X-Chair adding Heat and Massage to the chair"
            />
          </div>
          <input
            type="checkbox"
            id="hmtModel"
            checked={modelCB[1]}
            onChange={() => dispatch({ type: "model", index: 1 })}
          />
          <label htmlFor="hmtModel">
            <div className="modelGifWrapper">
              <img src={hmt} loading="lazy" alt="" className="modelGif" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Heat and Massage Chair</h4>
            <span>+ $100.00</span>
          </div>
        </SingleFeature>

        <SingleFeature>
          <div style={{ width: "120px", margin: "0 auto" }}>
            <StaticImage
              src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
              alt="Elemax option for X-Chair adding Heat, cooling and Massage to the chair"
            />
          </div>
          <input
            type="checkbox"
            id="elemaxModel"
            checked={modelCB[2]}
            onChange={() => dispatch({ type: "model", index: 2 })}
          />
          <label htmlFor="elemaxModel">
            <div className="modelGifWrapper">
              <img src={elemax} loading="lazy" className="modelGif" alt="" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Cooling, Heat & Massage Chair</h4>
            <span>+ $130.00</span>
          </div>
        </SingleFeature>
      </div>
    </ModelRoot>
  );
}
