/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";
import { OptionContainer } from "./Headrest";

export default function Wheels({ wheels, wheelsCB, dispatch }) {
  return (
    <OptionContainer>
      <h3>Wheels</h3>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="basicWheel"
            className="borderOneInput"
            checked={wheelsCB[3]}
            onChange={() => dispatch({ type: "wheels", index: 3 })}
          />
          <label htmlFor="basicWheel" className="borderOneLabel">
            <div>
              <StaticImage
                alt="alt stuff"
                src="../../../images/xChair/standardCasterSet.jpeg"
                layout="constrained"
                width={150}
                height={103}
              />
            </div>
          </label>
          <div className="titleContainer">
            <h4>Basic Caster </h4>
          </div>
        </Checkbox>
        {wheelsCB.map((checkBox, index) => {
          if (index === 3) return null;
          return (
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
          );
        })}
      </div>
    </OptionContainer>
  );
}
