/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { fonts } from "../../../styles/theme.styled";
import {
  memoryFoamAvailableColors,
  widthAvailableColors,
} from "./availableColorVaraints";

const notAvailable = ({ width, foam, title }) => {
  if (
    (width && widthAvailableColors.indexOf(title) === -1) ||
    (foam && memoryFoamAvailableColors.indexOf(title) === -1)
  ) {
    return css`
      opacity: 0.6;
      pointer-events: none;
      position: relative;
      ::after {
        opacity: 1;
        content: "";
        position: absolute;
        width: 2px;
        top: 0;
        right: 50%;
        transform: rotate(45deg);
        background-color: black;
        height: 100%;
        z-index: 100;
      }
    `;
  }
  return null;
};
const ColorRoot = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h3 {
    font-family: ${fonts.sans};
  }
  .colorsWrapper {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    align-items: center;
    justify-content: center;
  }
  h4 {
    font-family: ${fonts.sans};
    font-weight: 400;
  }
`;
const SingleColor = styled.div`
  label {
    cursor: pointer;
  }
  input {
    display: none;
  }
  label img {
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid white;
  }
  label div {
    border: 4px solid white;
    border-radius: 50%;
  }
  input:checked + label div {
    border: 4px solid #ec1221;
  }
  ${notAvailable}
`;
export default function ColorOptions({
  colors,
  colorCB,
  dispatch,
  extraColors,
  seatWidth,
  memoryFoam,
}) {
  const [activeColor, setActiveColor] = useState(colors[0].title);
  const onColorChange = (index, title) => {
    setActiveColor(title);
    dispatch({ type: "color", index, title });
  };
  return (
    <ColorRoot>
      <h3>{`Select Fabric: ${activeColor}`}</h3>
      <div className="colorsWrapper">
        {colors.map((c) => (
          <SingleColor
            key={c.title}
            width={seatWidth}
            foam={memoryFoam}
            title={c.title}
          >
            <input
              type="checkbox"
              id={`colorSelect${c.index}`}
              onChange={() => onColorChange(c.index, c.title)}
              checked={colorCB[c.index]}
            />
            <label htmlFor={`colorSelect${c.index}`}>
              <GatsbyImage
                image={getImage(c.img)}
                alt={`X-Chair's X-4 ${c.title} fabric option`}
              />
            </label>
          </SingleColor>
        ))}
        {extraColors && <h4>Leather</h4>}
      </div>
      {extraColors && (
        <>
          <div className="colorsWrapper">
            {extraColors["Premium Leather"].map((c) => (
              <SingleColor
                key={c.title}
                width={seatWidth}
                foam={memoryFoam}
                title={c.title}
              >
                <input
                  type="checkbox"
                  id={`colorSelect${c.index}`}
                  onChange={() => onColorChange(c.index, c.title)}
                  checked={colorCB[c.index]}
                />
                <label htmlFor={`colorSelect${c.index}`}>
                  <GatsbyImage
                    image={getImage(c.img)}
                    alt={`X-Chair's X-4 ${c.title} fabric option`}
                  />
                </label>
              </SingleColor>
            ))}
            <h4>Premium Leather +$50</h4>
          </div>
          <div className="colorsWrapper">
            {extraColors.Brisa.map((c) => (
              <SingleColor
                key={c.title}
                width={seatWidth}
                foam={memoryFoam}
                title={c.title}
              >
                <input
                  type="checkbox"
                  id={`colorSelect${c.index}`}
                  onChange={() => onColorChange(c.index, c.title)}
                  checked={colorCB[c.index]}
                />
                <label htmlFor={`colorSelect${c.index}`}>
                  <GatsbyImage
                    image={getImage(c.img)}
                    alt={`X-Chair's X-4 ${c.title} fabric option`}
                  />
                </label>
              </SingleColor>
            ))}
            <h4>Brisa +$200</h4>
          </div>
        </>
      )}
    </ColorRoot>
  );
}
