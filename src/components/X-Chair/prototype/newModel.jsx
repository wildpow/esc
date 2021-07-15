/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { OptionContainer } from "./Headrest";
import hmt from "../../../images/xChair/models/hmt.gif";
import elemax from "../../../images/xChair/models/elemax.gif";
import { fonts } from "../../../styles/theme.styled";

const ModelWrapper = styled.div`
  display: flex;
  gap: 20px;

  input {
    display: none;
  }
  .singleOption {
    max-width: 150px;
  }
  /* padding-right: 20px; */
  .modelGif {
    /* background-image: url(${({ bg }) => bg}); */
    background-size: cover;
    object-position: 50% 50%;
    background-repeat: no-repeat;
    /* height: 90px;
  width: 100%; */
  }
  .modelGifWrapper {
    width: 150px;
    height: 103px;
    img {
      width: 150px;
      height: 103px;
    }
    /* width: 150px; */
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
    }
    span {
      font-weight: 500;
    }
  }
`;
const FeatureTitle = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  font-family: ${fonts.sans};
  h3 {
    margin: 0;
    padding-left: 10px;
  }
  span {
    width: 30px;
    height: 30px;
    color: white;
    background-color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
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
          <input
            type="checkbox"
            id="standardModel"
            // className="borderOneInput"
            checked={modelCB[0]}
            onChange={() => dispatch({ type: "model", index: 0 })}
          />
          <div style={{ width: "35px", margin: "0 auto", marginBottom: "3px" }}>
            <GatsbyImage image={getImage(logoImg.image)} alt={logoImg.alt} />
          </div>
          <label
            htmlFor="standardModel"
            // className="borderOneLabel"
          >
            <div className="modelGifWrapper==1">
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
          <input
            type="checkbox"
            id="hmtModel"
            // className="borderOneInput"
            checked={modelCB[1]}
            onChange={() => dispatch({ type: "model", index: 1 })}
          />
          <div
            style={{ width: "120px", margin: "0 auto", marginBottom: "3px" }}
          >
            <StaticImage
              src="../../../images/xChair/modelLogos/X-HMT.png"
              alt="X-HMT option for X-Chair adding Heat and Massage to the chair"
            />
          </div>
          <label
            htmlFor="hmtModel"
            // className="borderOneLabel"
          >
            <div className="modelGifWrapper">
              <img
                src={hmt}
                loading="lazy"
                alt=""
                className="modelGif"
                // style={{ marginBottom: "2px" }}
              />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Heat and Massage Chair</h4>
            <span>+ $100.00</span>
          </div>
        </div>

        <div className="singleOption">
          {" "}
          <input
            type="checkbox"
            id="elemaxModel"
            // className="borderOneInput"
            checked={modelCB[2]}
            onChange={() => dispatch({ type: "model", index: 2 })}
          />
          <div style={{ width: "120px", margin: "0 auto" }}>
            <StaticImage
              src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
              alt="Elemax option for X-Chair adding Heat, cooling and Massage to the chair"
            />
          </div>
          <label
            htmlFor="elemaxModel"
            // className="borderOneLabel"
          >
            <div className="modelGifWrapper">
              <img
                src={elemax}
                loading="lazy"
                className="modelGif"
                alt=""
                // style={{ height: "100px" }}
              />
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
