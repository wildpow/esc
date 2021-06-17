/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import getNoHeadrest from "../query/getNoHeadrest.query";
import Checkbox from "./checkbox.styled";

export default function Headrest({
  title,
  dispatch,
  headrestImg,
  headrestBool,
}) {
  const noHeadrest = getNoHeadrest(title);
  return (
    <div>
      {/* {console.log("title", title)}
      {console.log("dispatch", dispatch)}

      {console.log("headrestImg", headrestImg)}
      {console.log("headrestBool", headrestBool)} */}

      <h2>Headrest</h2>
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
        </Checkbox>
        <Checkbox>
          <input
            type="checkbox"
            id="headrest"
            className="borderOneInput"
            onChange={() => dispatch({ type: "headrest" })}
            checked={headrestBool}
          />
          <label htmlFor="headrest" className="borderOneLabel">
            <div>
              <GatsbyImage image={getImage(headrestImg)} alt="alt stuff" />
            </div>
          </label>
        </Checkbox>
      </div>
    </div>
  );
}
