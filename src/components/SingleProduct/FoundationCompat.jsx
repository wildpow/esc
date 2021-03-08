import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import useFoundationImages from "./fCompatImgHook";

const FoundationRoot = styled.div`
  .lgWrapper {
    display: flex;
    width: 100%;
  }
  .smWrapper {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
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
        <div className="smWrapper">
          <div className="imgWrapper">
            <Img fluid={box.childImageSharp.fluid} />
            <p>Box Spring</p>
          </div>
          <div className="imgWrapper">
            <Img fluid={frame.childImageSharp.fluid} />
            <p>Traditional Frames</p>
          </div>
        </div>
        <div className="smWrapper">
          <div className="imgWrapper">
            <Img fluid={adjBase.childImageSharp.fluid} />
            <p>Ajustable Bases</p>
          </div>
          <div className="imgWrapper">
            <Img fluid={platform.childImageSharp.fluid} />
            <p>Platform</p>
          </div>
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
