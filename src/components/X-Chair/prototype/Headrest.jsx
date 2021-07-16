/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import getNoHeadrest from "../query/getNoHeadrest.query";
import Checkbox from "./checkbox.styled";
import { FeatureTitle, OptionContainer } from "./xChair.styled";

export default function Headrest({
  title,
  dispatch,
  headrestImg,
  headrestBool,
  price,
}) {
  const noHeadrest = getNoHeadrest(title);
  return (
    <OptionContainer>
      <FeatureTitle>
        <span>3</span>

        <h3>Headrest</h3>
      </FeatureTitle>
      <div style={{ display: "flex", paddingLeft: "25px" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="noHeadrest"
            className="borderOneInput"
            onChange={() => dispatch({ type: "headrest", price })}
            checked={!headrestBool}
          />
          <label htmlFor="noHeadrest" className="borderOneLabel">
            <div>
              <GatsbyImage image={getImage(noHeadrest)} alt="alt stuff" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>No Headrest</h4>
            <span />
          </div>
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="headrest"
            className="borderOneInput"
            onChange={() => dispatch({ type: "headrest", price })}
            checked={headrestBool}
          />{" "}
          <label htmlFor="headrest" className="borderOneLabel">
            <div>
              <GatsbyImage image={getImage(headrestImg)} alt="alt stuff" />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Headrest</h4>
            <span>{`+ $${price}`}</span>
          </div>
        </Checkbox>
      </div>
    </OptionContainer>
  );
}
