import { useState } from "react";
import styled from "@emotion/styled";

const GridWrapper = styled.div`
  max-width: 1536px;
  margin: 0 auto;
  .grid__controls {
    position: fixed;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    padding: 10px;
    background-color: rgba(255, 255, 155, 0.8);
    top: 20px;
    left: 20px;
    z-index: 999999999999;
    input {
      transform: scale(2);
      max-width: 60px;
    }
  }
  .grid {
    grid-gap: 16px;
    position: absolute;
    display: grid;
    top: 0;
    left: 16px;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(100%, auto);
    width: calc(100% - 32px);
    width: 100%;
    height: 500vh;
    opacity: 0.4;
    background-color: transparent;
    padding: 0;
    display: ${({ grid }) => (grid ? "grid" : "none")};
    z-index: 1000;
    padding: 0 16px;
    max-width: 1536px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    p {
      border: 1px solid;
      background-color: #000;
      margin: 0;
      opacity: ${({ opacity }) => opacity};
    }
  }
`;

export default function GridOverlay() {
  const [grid, setGrid] = useState(false);
  const [opacity, setOpacity] = useState(0.2);
  return (
    <GridWrapper grid={grid} opacity={opacity}>
      <div className="grid__controls">
        <input type="checkbox" onClick={() => setGrid(!grid)} />
        <input
          type="number"
          step="0.1"
          min="0"
          max="1"
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
        />
      </div>
      <div className="grid">
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
        <p />
      </div>
    </GridWrapper>
  );
}
