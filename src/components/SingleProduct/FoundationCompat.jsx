import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import useFoundationImages from "./fCompatImgHook";

const FoundationRoot = styled.div``;

export default function FoundationCompat(props) {
  const { adjBase, frame, platform, box } = useFoundationImages();
  return (
    <FoundationRoot>
      <h4>Works With All Bed Types</h4>
      <div>
        <div>//</div>
        <div>//</div>
      </div>
      <p>
        Your mattress purchase is fully compatible with all modern support
        systems, including adjustable base, platform bed, box
        spring/foundations, even the floor!
      </p>
    </FoundationRoot>
  );
}
