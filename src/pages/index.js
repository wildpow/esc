import React from "react";
import { css, theme } from "twin.macro";

const divCss = css`
  font-size: 200px;
  text-align: center;
  font-family: ${theme`fontFamily.sans`};
  .poop {
    background-color: blue;
  }
`;
export default function Home() {
  return (
    <div className={divCss}>
      <div className="poop">Hello world!</div>Hello world!
    </div>
  );
}
