/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import getNoHeadrest from "../query/getNoHeadrest.query";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";
import FeaturePopup from "./FeaturePopup";

const HeadrestRoot = styled(OptionRoot)`
  .headrest {
    padding-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      margin: 0;
    }
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
    <HeadrestRoot>
      <FeatureTitle>
        <span>3</span>

        <h3>Headrest</h3>
        <FeaturePopup
          content="
            X-Chair's innovative, removable headrest features adjustable
            height and angle. No matter what position you sit in, X-Chair's
            headrest can pivot to keep you comfortable."
        />
      </FeatureTitle>
      <div className="optionWrapper">
        <SingleFeature>
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
        </SingleFeature>
        <SingleFeature>
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
        </SingleFeature>
      </div>
    </HeadrestRoot>
  );
}
