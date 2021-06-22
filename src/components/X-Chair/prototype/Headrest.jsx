/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

import getNoHeadrest from "../query/getNoHeadrest.query";
import Checkbox from "./checkbox.styled";
import { fonts } from "../../../styles/theme.styled";

export const OptionContainer = styled.div`
  h3 {
    font-family: ${fonts.sans};
  }
`;
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
      <h3>Headrest</h3>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="noHeadrest"
            className="borderOneInput"
            onChange={() => dispatch({ type: "headrest" })}
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
            onChange={() => dispatch({ type: "headrest" })}
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
