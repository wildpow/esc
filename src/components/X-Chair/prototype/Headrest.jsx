/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import getNoHeadrest from "../query/getNoHeadrest.query";
import { FeatureTitle, OptionContainer, OptionsWrapper } from "./xChair.styled";

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
      <OptionsWrapper>
        <div className="singleOption">
          <input
            type="checkbox"
            id="noHeadrest"
            onChange={() => dispatch({ type: "headrest", price })}
            checked={!headrestBool}
          />
          <label htmlFor="noHeadrest">
            <div>
              <GatsbyImage image={getImage(noHeadrest)} alt="alt stuff" />
            </div>
          </label>
          <div className="titleContainer headrest">
            <h4>No Headrest</h4>
            <span />
          </div>
        </div>
        <div className="singleOption">
          <input
            type="checkbox"
            id="headrest"
            onChange={() => dispatch({ type: "headrest", price })}
            checked={headrestBool}
          />{" "}
          <label htmlFor="headrest">
            <div>
              <GatsbyImage image={getImage(headrestImg)} alt="alt stuff" />
            </div>
          </label>
          <div className="titleContainer headrest">
            <h4>Headrest&nbsp;</h4>
            <span>{`+$${price}`}</span>
          </div>
        </div>
      </OptionsWrapper>
    </OptionContainer>
  );
}
