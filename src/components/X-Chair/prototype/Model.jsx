/* eslint-disable jsx-a11y/label-has-associated-control */
import { StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import Checkbox from "./checkbox.styled";
import hmt from "../../../images/xChair/models/hmt.gif";
import elemax from "../../../images/xChair/models/elemax.gif";

const GifModelImg = styled.img`
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 90px;
  width: 100%;
`;
export default function ModelSelect({ dispatch, modelCB }) {
  return (
    <div>
      <h2>Wheels</h2>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="standardModel"
            className="borderOneInput"
            checked={modelCB[0]}
            onChange={() => dispatch({ type: "model", index: 0 })}
          />
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
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="hmtModel"
            className="borderOneInput"
            checked={modelCB[1]}
            onChange={() => dispatch({ type: "model", index: 1 })}
          />
          <label htmlFor="hmtModel" className="borderOneLabel">
            <div>
              <GifModelImg bg={hmt} />
            </div>
          </label>
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="elemaxModel"
            className="borderOneInput"
            checked={modelCB[2]}
            onChange={() => dispatch({ type: "model", index: 2 })}
          />
          <label htmlFor="elemaxModel" className="borderOneLabel">
            <div>
              <GifModelImg bg={elemax} />
            </div>
          </label>
        </Checkbox>
      </div>
    </div>
  );
}
