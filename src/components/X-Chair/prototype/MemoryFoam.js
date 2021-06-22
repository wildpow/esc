/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";
import { OptionContainer } from "./Headrest";

const foam = (s) => {
  switch (s) {
    case "Leather Exec":
      return [
        <StaticImage
          src="../../../images/xChair/memoryFoam/x-4 Standard width.jpg"
          alt="stuf"
        />,
        <StaticImage
          src="../../../images/xChair/memoryFoam/x-4 extended width.jpg"
          alt="stuf"
        />,
      ];

    default:
      return [
        <StaticImage
          src="../../../images/xChair/memoryFoam/x-3 Standard width.jpg"
          alt="stuf"
        />,
        <StaticImage
          src="../../../images/xChair/memoryFoam/x-3 extended width.jpg"
          alt="stuf"
        />,
      ];
  }
};
export default function MemoryFoam({
  foamBool,
  title,
  activeColor,
  dispatch,
  price,
}) {
  const memoryFoamOptions = foam(title);
  const isNotBlack = !activeColor.includes("Black");
  return (
    <OptionContainer>
      <h3>Seat Foam</h3>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="memoryFoamOptions"
            className="borderOneInput"
            onChange={() => dispatch({ type: "foam" })}
            checked={!foamBool}
          />
          <label htmlFor="memoryFoamOptions" className="borderOneLabel">
            <div>{memoryFoamOptions[0]}</div>
          </label>
          <div className="titleContainer">
            <h4>Standard Foam</h4>
          </div>
        </Checkbox>
        <Checkbox colorCheck={isNotBlack}>
          <input
            type="checkbox"
            id="memoryFoamOptions2"
            className="borderOneInput"
            onChange={() => dispatch({ type: "foam" })}
            checked={foamBool}
          />
          <label htmlFor="memoryFoamOptions2" className="borderOneLabel">
            <div className="container">{memoryFoamOptions[1]}</div>
          </label>
          <div className="titleContainer">
            <h4>Memory Foam</h4>
            <span>{`+ $${price}`}</span>
          </div>
        </Checkbox>
      </div>
    </OptionContainer>
  );
}
MemoryFoam.propTypes = {
  foamBool: PropTypes.bool,
  title: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  activeColor: PropTypes.string,
  // widthData: PropTypes.instanceOf(Object),
};

MemoryFoam.defaultProps = {
  activeColor: "Some color from state",
  foamBool: false,
  title: "Title of product",
};
