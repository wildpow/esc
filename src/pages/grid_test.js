import styled from "@emotion/styled";
import { useState } from "react";
import Layout from "../components/Layout";

const GridWrapper = styled.div`
  display: grid;
  padding: 0 16px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(60px, auto);
  grid-gap: 16px;
  max-width: 1536px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  > * {
    background-color: #3bbced;
    color: white;
  }
  /* header {
    grid-column: 1/13;
    height: 60px;
  } */
  main {
    grid-column: 1/13;
    /* grid-row: 2/6; */
    height: 600px;
  }
  input {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
  }
  /* .buyMatt {
    grid-row: 6/9;
    grid-column: 1/4;
  }
  .buyAdj {
    grid-row: 6/9;
    grid-column: 4/7;
  }
  .buyAcc {
    grid-row: 6/9;
    grid-column: 7/10;
  }
  .buyChair {
    grid-row: 6/9;
    grid-column: 10/13;
  } */
  .why {
    grid-row: 2/5;
    grid-column: 1/13;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    .why__item {
      background-color: yellow;
      color: black;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      div {
        height: 45px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
        width: calc(70% - 16px);
      }
    }
  }
`;
const Grid = styled.div`
  grid-gap: 16px;
  position: absolute;
  display: grid;
  top: 0;
  left: 16px;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100%, auto);
  width: calc(100% - 32px);
  height: 100%;
  opacity: 0.4;
  background-color: transparent;
  padding: 0;
  display: ${({ grid }) => (grid ? "grid" : "none")};
  p {
    border: 1px solid;
    background-color: #000;
    margin: 0;
    opacity: 0.2;
  }
`;
export default function GridTest() {
  const stuff = "";
  const [grid, setGrid] = useState(false);
  return (
    <Layout>
      <GridWrapper>
        <input type="checkbox" onClick={() => setGrid(!grid)} />
        <Grid grid={grid}>
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
        </Grid>
        {/* <header>Header</header> */}
        <main>Main</main>
        {/* <div className="buyMatt">buy matt</div>
        <div className="buyAdj">buy adj</div>
        <div className="buyAcc">buy acc</div>
        <div className="buyChair">buy chair</div> */}
        <div className="why">
          <div className="why__item">
            <div className="why__title">Shop Mattresses</div>
          </div>
          <div className="why__item">
            <div className="why__title">Shop Adjustables</div>
          </div>
          <div className="why__item">
            <div className="why__title">Shop Accessories</div>
          </div>
          <div className="why__item">
            <div className="why__title">Shop X-Chair</div>
          </div>
        </div>
      </GridWrapper>
    </Layout>
  );
}
