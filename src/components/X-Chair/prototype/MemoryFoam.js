/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { StaticImage } from "gatsby-plugin-image";
import Checkbox from "./checkbox.styled";

export default function MemoryFoam({ foamBool, title, foamData, dispatch }) {
  // Attach data to active option
  // const needsAttention = foamData;
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
  const memoryFoamOptions = foam(title);
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
        <Checkbox>
          <input
            type="checkbox"
            id="memoryFoamOptions2"
            className="borderOneInput"
            onChange={() => dispatch({ type: "foam" })}
            checked={foamBool}
          />
          <label htmlFor="memoryFoamOptions2" className="borderOneLabel">
            <div>{memoryFoamOptions[1]}</div>
          </label>
        </Checkbox>
      </div>
    </div>
  );
}
