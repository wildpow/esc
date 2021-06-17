/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";

export default function Wheels({ wheels, wheelsCB }) {
  const poop = "";
  return (
    <div>
      {console.log(poop)}
      <h2>Wheels</h2>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="noHeadrest"
            className="borderOneInput"
            checked={wheelsCB[3].checked}
          />
          <label htmlFor="noHeadrest" className="borderOneLabel">
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
        </Checkbox>
        {wheelsCB.map((checkBox) => {
          if (checkBox.index === 3) return null;
          return (
            <Checkbox key={checkBox.index}>
              <input
                type="checkbox"
                id="headrest"
                className="borderOneInput"
                // onChange={() => setHeadrestBool(!headrestBool)}
                checked={checkBox.checked}
              />
              <label htmlFor="headrest" className="borderOneLabel">
                <div>
                  <GatsbyImage
                    image={getImage(wheels[checkBox.index].image)}
                    alt="alt stuff"
                  />
                </div>
              </label>
            </Checkbox>
          );
        })}
      </div>
    </div>
  );
}
