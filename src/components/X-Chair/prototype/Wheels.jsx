/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";
import { FeatureTitle, OptionContainer } from "./xChair.styled";

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
    <OptionContainer>
      <FeatureTitle>
        <span>{titleNumber(title)}</span>

        <h3>Add X-Wheels</h3>
      </FeatureTitle>
      <div style={{ display: "flex" }}>
        {wheelsCB.map((checkBox, index) => (
          <Checkbox key={`index${index + 1}`}>
            <input
              type="checkbox"
              id={`wheel${index}`}
              className="borderOneInput"
              onChange={() => dispatch({ type: "wheels", index })}
              checked={checkBox}
            />
            <label htmlFor={`wheel${index}`} className="borderOneLabel">
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
          </Checkbox>
        ))}
      </div>
    </OptionContainer>
  );
}
