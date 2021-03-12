import styled from "styled-components";
import Img from "gatsby-image";
import useFoundationImages from "./fCompatImgHook";
import { colors, fonts, spacing } from "../../utils/styles";

const FoundationRoot = styled.div`
  font-family: ${fonts.sans};

  background-color: ${colors.gray[200]};
  /* padding: ${spacing[10]} 0; */
  margin: 0 auto;
  /* display: flex;
  flex-direction: column; */
  /* justify-content: center;
  align-items: center; */
  max-width: 1000px;
  p {
    text-align: center;
    margin: 0;
    padding-top: ${spacing[6]};
  }
  h4 {
    font-family: ${fonts.serif};

    font-size: 0.9rem;
    margin-top: 0;
    margin-bottom: 0;
    color: ${colors.blue["900"]};
    border-bottom: 4px solid ${colors.red[800]};
    padding-bottom: 2px;
    padding-left: 20px;
  }
  .lgWrapper {
    display: grid;
    /* gap: 50px; */
    grid-column-gap: 20px;
    grid-row-gap: 0px;
    grid-template-columns: repeat(2, minMax(100px, 150px));
    grid-template-areas:
      "one two"
      "three four";
    justify-content: space-evenly;
  }
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
    /* max-width: 250px; */
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    position: relative;
    p {
      font-family: ${fonts.sans};
      margin: 0;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);
    }
  }

  @media (min-width: 360px) {
    h4 {
      font-size: 1.2rem;
    }
  }
  @media (min-width: 550px) {
    h4 {
      font-size: 2rem;
      margin-top: 0;
      margin-bottom: 0;
      border-bottom: 4px solid ${(props) => props.theme.mainColor2};
      padding-bottom: 2px;
      padding-left: 20px;
    }
  }
  @media (min-width: 720px) {
    .lgWrapper {
      display: grid;
      grid-template-areas: "one two three four";
      /* grid-template-rows: 50px 1fr 30px; */
      grid-template-columns: repeat(4, minMax(100px, 150px));
      justify-content: space-evenly;
      gap: 50px;
    }
  }
  @media (min-width: 992px) {
    h4 {
      padding-left: 20px;
      font-size: 2.4rem;
      margin-top: 0;
      margin-bottom: 0;
      padding-bottom: 2px;
    }
  }
  @media (min-width: 1300px) {
    h4 {
      padding-left: 20px;
      font-weight: 700;
      font-size: 2.1rem;
    }
  }
  @media print {
    display: none;
  }
`;

export default function FoundationCompat() {
  const { adjBase, frame, platform, box } = useFoundationImages();

  return (
    <FoundationRoot>
      <h4>Works With All Foundations</h4>
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
        New mattresses are fully compatible with all modern support systems
        including: adjustable base, platform bed, box spring/foundation or even
        directly on the floor!
      </p>
    </FoundationRoot>
  );
}
