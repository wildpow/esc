import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import useFoundationImages from "./fCompatImgHook";

const FoundationRoot = styled.div`
  .lgWrapper {
    display: grid;
    grid-template-areas: "one two three four";
    /* grid-template-rows: 50px 1fr 30px; */
    grid-template-columns: repeat(4, minMax(150px, 250px));
    justify-content: space-around;
    gap: 25px;
  }
  @media (max-width: 1200px) {
    .lgWrapper {
      grid-template-columns: repeat(2, minMax(150px, 250px));
      grid-template-areas:
        "one two"
        "three four";
    }
  }
  /* .smWrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  } */
  .one {
    grid-area: one;
  }
  .two {
    grid-area: two;
  }
  .three {
    grid-area: three;
  }
  .four {
    grid-area: four;
  }
  .imgWrapper {
    max-width: 250px;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    p {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default function FoundationCompat(props) {
  const { adjBase, frame, platform, box } = useFoundationImages();
  return (
    <FoundationRoot>
      <h4>Works With All Bed Types</h4>
      <div className="lgWrapper">
        <div className="imgWrapper one">
          <Img fluid={box.childImageSharp.fluid} />
          <p>Box Spring</p>
        </div>
        <div className="imgWrapper two">
          <Img fluid={frame.childImageSharp.fluid} />
          <p>Traditional Frames</p>
        </div>

        <div className="imgWrapper three">
          <Img fluid={adjBase.childImageSharp.fluid} />
          <p>Ajustable Bases</p>
        </div>
        <div className="imgWrapper four">
          <Img fluid={platform.childImageSharp.fluid} />
          <p>Platform</p>
        </div>
      </div>

      <p>
        Your mattress purchase is fully compatible with all modern support
        systems, including adjustable base, platform bed, box
        spring/foundations, even the floor!
      </p>
    </FoundationRoot>
  );
}
