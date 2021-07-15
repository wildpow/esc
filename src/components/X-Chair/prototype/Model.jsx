/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Checkbox from "./checkbox.styled";
import hmt from "../../../images/xChair/models/hmt.gif";
import elemax from "../../../images/xChair/models/elemax.gif";
import { OptionContainer } from "./Headrest";

const GifModelImg = styled.img`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  object-position: 50% 50%;
  background-repeat: no-repeat;
  height: 90px;
  width: 100%;
`;
export default function ModelSelect({ dispatch, modelCB, logoImg }) {
  return (
    <OptionContainer>
      <h3>Choose Model</h3>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="standardModel"
            className="borderOneInput"
            checked={modelCB[0]}
            onChange={() => dispatch({ type: "model", index: 0 })}
          />
          <div style={{ width: "35px", margin: "0 auto" }}>
            <GatsbyImage image={getImage(logoImg.image)} alt={logoImg.alt} />
          </div>
          <label htmlFor="standardModel" className="borderOneLabel">
            <div>
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
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="hmtModel"
            className="borderOneInput"
            checked={modelCB[1]}
            onChange={() => dispatch({ type: "model", index: 1 })}
          />
          <div style={{ width: "120px", margin: "0 auto" }}>
            <StaticImage
              src="../../../images/xChair/modelLogos/X-HMT.png"
              alt="X-HMT option for X-Chair adding Heat and Massage to the chair"
            />
          </div>
          <label htmlFor="hmtModel" className="borderOneLabel">
            <div>
              <GifModelImg bg={hmt} loading="lazy" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Heat and Massage Chair</h4>
            <span>+ $100.00</span>
          </div>
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="elemaxModel"
            className="borderOneInput"
            checked={modelCB[2]}
            onChange={() => dispatch({ type: "model", index: 2 })}
          />
          <div style={{ width: "120px", margin: "0 auto" }}>
            <StaticImage
              src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
              alt="Elemax option for X-Chair adding Heat, cooling and Massage to the chair"
            />
          </div>
          <label htmlFor="elemaxModel" className="borderOneLabel">
            <div>
              <GifModelImg bg={elemax} loading="lazy" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Cooling, Heat & Massage Chair</h4>
            <span>+ $130.00</span>
          </div>
        </Checkbox>
      </div>
    </OptionContainer>
  );
}
