/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

const ColorRoot = styled.div`
  display: flex;
  flex-direction: column;
  /* input {
    display: none;
  } */
  .colorsWrapper {
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
    grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
    /* grid-template-rows: repeat(auto, 60px); */
    align-items: center;
    justify-content: center;
  }
  .color {
    border-radius: 50%;
    overflow: hidden;
  }
`;
export default function ColorOptions({ colors, colorCB, dispatch }) {
  // const stuff = "123";
  return (
    <ColorRoot>
      <h3>Select Fabric</h3>
      <div className="colorsWrapper">
        {colors.map((c, i) => (
          <div key={c.title}>
            <input
              type="checkbox"
              id={`colorSelect${i}`}
              className="borderOneInput"
              onChange={() =>
                dispatch({ type: "color", index: i, title: c.title })
              }
              checked={colorCB[i]}
            />
            <label htmlFor={`colorSelect${i}`} className="borderOneLabel">
              <div className="color">
                <GatsbyImage
                  image={getImage(c.img)}
                  alt={`X-Chair's X-4 ${c.title} fabric option`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </ColorRoot>
  );
}
