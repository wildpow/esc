/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";

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
export default function MemoryFoam({ foamBool, title, activeColor, dispatch }) {
  // Attach data to active option
  // const needsAttention = foamData;
  const memoryFoamOptions = foam(title);
  const isNotBlack = !activeColor.includes("Black");
  return (
    <div>
      <h2>Seat Width</h2>
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
        </Checkbox>
      </div>
    </div>
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
