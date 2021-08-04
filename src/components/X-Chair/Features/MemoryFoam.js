/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { OptionRoot, FeatureTitle, SingleFeature } from "./feature.styled";
import { memoryFoamAvailableColors } from "./availableColorVaraints";
import FeaturePopup from "./FeaturePopup";

const foam = (s) => {
  switch (s) {
    case "Leather Exec":
      return {
        images: [
          <StaticImage
            src="../../../images/xChair/memoryFoam/x-4 Standard width.jpg"
            alt="stuf"
          />,
          <StaticImage
            src="../../../images/xChair/memoryFoam/x-4 extended width.jpg"
            alt="stuf"
          />,
        ],
        popupContent: `Available in Black Theather only, the X4 offers a Memory Foam seat which provides a plush and pressure-free sit that you'd expect to find in any executive chair.`,
      };

    default:
      return {
        images: [
          <StaticImage
            src="../../../images/xChair/memoryFoam/x-3 Standard width.jpg"
            alt="stuf"
          />,
          <StaticImage
            src="../../../images/xChair/memoryFoam/x-3 extended width.jpg"
            alt="stuf"
          />,
        ],
        popupContent: `Available in Black only, the X3 offers a Memory Foam seat which provides a plush and pressure-free sit that you'd expect to find in any executive chair.`,
      };
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
  const availableInColor =
    memoryFoamAvailableColors.indexOf(activeColor) === -1;
  return (
    <OptionRoot>
      <FeatureTitle>
        <span>5</span>

        <h3>Seat Foam</h3>
        <FeaturePopup content={memoryFoamOptions.popupContent} />
      </FeatureTitle>
      <div className="optionWrapper">
        <SingleFeature>
          <input
            type="checkbox"
            id="memoryFoamOptions"
            onChange={() => dispatch({ type: "foam", price })}
            checked={!foamBool}
          />
          <label htmlFor="memoryFoamOptions">
            <div>{memoryFoamOptions.images[0]}</div>
          </label>
          <div className="titleContainer">
            <h4>Standard Foam</h4>
          </div>
        </SingleFeature>
        <SingleFeature colorCheck={availableInColor}>
          <input
            type="checkbox"
            id="memoryFoamOptions2"
            onChange={() => dispatch({ type: "foam", price })}
            checked={foamBool}
          />
          <label htmlFor="memoryFoamOptions2">
            <div className="container">{memoryFoamOptions.images[1]}</div>
          </label>
          <div className="titleContainer">
            <h4>Memory Foam</h4>
            <span>{`+ $${price}`}</span>
          </div>
        </SingleFeature>
      </div>
    </OptionRoot>
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
