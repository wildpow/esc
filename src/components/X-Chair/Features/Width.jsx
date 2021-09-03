/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";
import { widthAvailableColors } from "./availableColorVaraints";
import FeaturePopup from "./FeaturePopup";

const width = (s) => {
  switch (s) {
    case "Leather Exec":
      return {
        images: [
          <StaticImage
            src="../../../images/xChair/widths/x4_blk_le_std_1.jpg"
            alt="stuf"
          />,
          <StaticImage
            src="../../../images/xChair/widths/x4_blk_ws.jpg"
            alt="stuf"
          />,
        ],
        popupContent: `Available in Black Leather and Black Brisa, the X4 offers and Extended Width seat option that comes with 1.5" of additional surface area.`,
      };
    case "ATR Mgmt":
      return {
        images: [
          <StaticImage
            src="../../../images/xChair/widths/x3_blk_std_1__1.jpg"
            alt="stuf"
          />,
          <StaticImage
            src="../../../images/xChair/widths/x3_blk_ws_1__2.jpg"
            alt="stuf"
          />,
        ],
        popupContent: `"Available in Black and Grey, the X3 offers an Extended Width seat option that comes with 1.5" of additional surface area.`,
      };
    default:
      return {
        images: [
          <StaticImage
            src="../../../images/xChair/widths/x2_std_4.jpg"
            alt="stuf"
          />,
          <StaticImage
            src="../../../images/xChair/widths/x2_ws_2_.jpg"
            alt="stuf"
          />,
        ],
        popupContent: `Available in Black only, the X2 offers and Extended Width seat option that comes with 1" of additional surface area.`,
      };
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
        <FeaturePopup content={modelWidth.popupContent} />
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
            <div>{modelWidth.images[0]}</div>
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
            <div className="container">{modelWidth.images[1]}</div>
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
