/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useState } from "react";
import styled from "@emotion/styled";
import { fonts } from "../../../styles/theme.styled";

const ColorRoot = styled.div`
  display: flex;
  flex-direction: column;
  .borderOneInput {
    display: none;
  }

  /* input {
    display: none;
  } */
  h3 {
    font-family: ${fonts.sans};
  }
  .colorsWrapper {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    /* grid-template-rows: repeat(auto, 60px); */
    align-items: center;
    justify-content: center;
  }
  .borderOneLabel img {
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid white;
  }
  .borderOneLabel div {
    border: 4px solid white;
    border-radius: 50%;
  }
  .borderOneInput:checked + label div {
    border: 4px solid #ec1221;
  }
  /* .borderOneInput:checked + label div img {
    border: 1px solid #ec1221;
  } */
  h4 {
    font-family: ${fonts.sans};
    font-weight: 400;
  }
`;
export default function ColorOptions({
  colors,
  colorCB,
  dispatch,
  extraColors,
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
          <div key={c.title}>
            <input
              type="checkbox"
              id={`colorSelect${c.index}`}
              className="borderOneInput"
              onChange={() => onColorChange(c.index, c.title)}
              checked={colorCB[c.index]}
            />
            <label htmlFor={`colorSelect${c.index}`} className="borderOneLabel">
              <GatsbyImage
                image={getImage(c.img)}
                alt={`X-Chair's X-4 ${c.title} fabric option`}
              />
            </label>
          </div>
        ))}
        {extraColors && <h4>Leather</h4>}
      </div>
      {extraColors && (
        <>
          <div className="colorsWrapper">
            {extraColors["Premium Leather"].map((c) => (
              <div key={c.title}>
                <input
                  type="checkbox"
                  id={`colorSelect${c.index}`}
                  className="borderOneInput"
                  onChange={() => onColorChange(c.index, c.title)}
                  checked={colorCB[c.index]}
                />
                <label
                  htmlFor={`colorSelect${c.index}`}
                  className="borderOneLabel"
                >
                  <GatsbyImage
                    image={getImage(c.img)}
                    alt={`X-Chair's X-4 ${c.title} fabric option`}
                  />
                </label>
              </div>
            ))}
            <h4>Premium Leather +$50</h4>
          </div>
          <div className="colorsWrapper">
            {extraColors.Brisa.map((c) => (
              <div key={c.title}>
                <input
                  type="checkbox"
                  id={`colorSelect${c.index}`}
                  className="borderOneInput"
                  onChange={() => onColorChange(c.index, c.title)}
                  checked={colorCB[c.index]}
                />
                <label
                  htmlFor={`colorSelect${c.index}`}
                  className="borderOneLabel"
                >
                  <GatsbyImage
                    image={getImage(c.img)}
                    alt={`X-Chair's X-4 ${c.title} fabric option`}
                  />
                </label>
              </div>
            ))}
            <h4>Brisa +$200</h4>
          </div>
        </>
      )}
    </ColorRoot>
  );
}
