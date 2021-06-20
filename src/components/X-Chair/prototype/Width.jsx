/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";

const width = (s) => {
  switch (s) {
    case "Leather Exec":
      return [
        <StaticImage
          src="../../../images/xChair/widths/x4_blk_le_std_1.jpg"
          alt="stuf"
        />,
        <StaticImage
          src="../../../images/xChair/widths/x4_blk_ws.jpg"
          alt="stuf"
        />,
      ];
    case "ATR Fabric":
      return [
        <StaticImage
          src="../../../images/xChair/widths/x3_blk_std_1__1.jpg"
          alt="stuf"
        />,
        <StaticImage
          src="../../../images/xChair/widths/x3_blk_ws_1__2.jpg"
          alt="stuf"
        />,
      ];
    default:
      return [
        <StaticImage
          src="../../../images/xChair/widths/x2_std_4.jpg"
          alt="stuf"
        />,
        <StaticImage
          src="../../../images/xChair/widths/x2_ws_2_.jpg"
          alt="stuf"
        />,
      ];
  }
};
export default function Width({ widthBool, title, dispatch, activeColor }) {
  const modelWidth = width(title);
  const isNotBlackOrX3Grey =
    !activeColor.includes("Black") && activeColor !== "Grey A.T.R.";
  return (
    <div>
      <h2>Seat Width</h2>
      <div style={{ display: "flex" }}>
        <Checkbox>
          <input
            type="checkbox"
            id="standardWidth"
            className="borderOneInput"
            onChange={() => dispatch({ type: "width" })}
            checked={!widthBool}
          />
          <label htmlFor="standardWidth" className="borderOneLabel">
            <div>{modelWidth[0]}</div>
          </label>
        </Checkbox>
        <Checkbox colorCheck={isNotBlackOrX3Grey}>
          <input
            type="checkbox"
            id="wideWidth"
            className="borderOneInput"
            onChange={() => dispatch({ type: "width" })}
            checked={widthBool}
          />
          <label htmlFor="wideWidth" className="borderOneLabel">
            <div className="container">{modelWidth[1]}</div>
          </label>
        </Checkbox>
      </div>
    </div>
  );
}

Width.propTypes = {
  widthBool: PropTypes.bool,
  title: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
  activeColor: PropTypes.string,
  // widthData: PropTypes.instanceOf(Object),
};

Width.defaultProps = {
  activeColor: "Some color from state",
  widthBool: false,
  title: "Title of product",
};
