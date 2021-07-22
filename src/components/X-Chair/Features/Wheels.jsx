/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";

const WheelRoot = styled(OptionRoot)`
  padding-bottom: 25px;
`;
const titleNumber = (title) => {
  if (title === "K-Sport Mgmt") {
    return 5;
  }
  if (title === "Flex Mesh Task") {
    return 4;
  }
  return 6;
};
export default function Wheels({ wheels, wheelsCB, dispatch, title }) {
  return (
    <WheelRoot>
      <FeatureTitle>
        <span>{titleNumber(title)}</span>

        <h3>Add X-Wheels</h3>
      </FeatureTitle>
      <div className="optionWrapper">
        {wheelsCB.map((checkBox, index) => (
          <SingleFeature key={`index${index + 1}`}>
            <input
              type="checkbox"
              id={`wheel${index}`}
              onChange={() => dispatch({ type: "wheels", index })}
              checked={checkBox}
            />
            <label htmlFor={`wheel${index}`}>
              <div>
                <GatsbyImage
                  image={getImage(wheels[index].image)}
                  alt="alt stuff"
                />
              </div>
            </label>
            <div className="titleContainer">
              <h4>{wheels[index].title}</h4>
              <span>{`+ $${wheels[index].price}`}</span>
            </div>
          </SingleFeature>
        ))}
      </div>
    </WheelRoot>
  );
}
