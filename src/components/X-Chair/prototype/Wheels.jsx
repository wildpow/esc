/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";
import { OptionContainer } from "./Headrest";

export default function Wheels({ wheels, wheelsCB, dispatch }) {
  return (
    <OptionContainer>
      <h3>Add X-Wheels</h3>
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
