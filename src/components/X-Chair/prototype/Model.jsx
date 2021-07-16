/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import hmt from "../../../images/xChair/models/hmt.gif";
import elemax from "../../../images/xChair/models/elemax.gif";
import { fonts, spacing } from "../../../styles/theme.styled";
import { FeatureTitle, OptionContainer } from "./xChair.styled";

const ModelWrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-left: 40px;
  input {
    display: none;
  }
  label {
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
    border-left: 1px solid transparent;
    outline: 1px solid #dadada;
    display: block;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  label::after {
    height: 4px;
    position: absolute;
    content: "";
    width: calc(100% + 2px);
    left: -1px;
    bottom: 0;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
  }
  input:hover + label::after {
    background-color: #ec1221;
  }
  input:checked + label::after {
    background-color: #ec1221;
  }
  label::before {
    background-color: white;
    color: white;
    content: " ";
    display: block;
    border-radius: 50%;
    border: 1px solid grey;
    position: absolute;
    top: -12px;
    left: -12px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 31px;
    transition-duration: 0.4s;
    transform: scale(0);
    z-index: 10;
  }
  label div {
    transition-duration: 0.2s;
    transform-origin: 50% 50%;
  }
  input:hover + label {
    border-top: 1px solid #ec1221;
    border-right: 1px solid #ec1221;
    border-left: 1px solid #ec1221;
  }

  input:checked + label {
    pointer-events: none;
    border-top: 1px solid #fff;
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
  }
  input:checked + label::before {
    content: "✓";
    background-color: grey;
    transform: scale(1);
  }
  input:checked:checked + label div {
    transform: scale(1);
    z-index: -1;
  }

  .singleOption {
    max-width: 150px;
  }
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
  .titleContainer {
    text-align: center;
    font-family: ${fonts.sans};
    h4 {
      font-weight: 300;
      margin-bottom: 4px;
      margin-top: ${spacing[3]};
    }
    span {
      font-weight: 500;
    }
  }
`;

export default function NewModelOption({ dispatch, modelCB, logoImg }) {
  return (
    <OptionContainer>
      <FeatureTitle>
        <span>1</span>

        <h3>Choose Model</h3>
      </FeatureTitle>
      <ModelWrapper>
        <div className="singleOption">
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
        </div>

        <div className="singleOption">
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
        </div>

        <div className="singleOption">
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
        </div>
      </ModelWrapper>
    </OptionContainer>
  );
}
