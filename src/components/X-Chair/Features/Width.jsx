/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";
import { widthAvailableColors } from "./availableColorVaraints";

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
export default function Width({
  widthBool,
  title,
  dispatch,
  activeColor,
  price,
}) {
  const modelWidth = width(title);

  const availableInColor = widthAvailableColors.indexOf(activeColor) === -1;

  return (
    <OptionRoot>
      <FeatureTitle>
        <span>4</span>

        <h3>Seat Width</h3>
      </FeatureTitle>
      <div className="optionWrapper">
        <SingleFeature>
          <input
            type="checkbox"
            id="standardWidth"
            onChange={() => dispatch({ type: "width", price })}
            checked={!widthBool}
          />
          <label htmlFor="standardWidth">
            <div>{modelWidth[0]}</div>
          </label>
          <div className="titleContainer">
            <h4>Standard Width</h4>
          </div>
        </SingleFeature>
        <SingleFeature colorCheck={availableInColor}>
          <input
            type="checkbox"
            id="wideWidth"
            onChange={() => dispatch({ type: "width", price })}
            checked={widthBool}
          />
          <label htmlFor="wideWidth">
            <div className="container">{modelWidth[1]}</div>
          </label>
          <div className="titleContainer">
            <h4>Extended Width</h4>
            <span>{`+ $${price}`}</span>
          </div>
        </SingleFeature>
      </div>
    </OptionRoot>
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
