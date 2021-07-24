/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Img from "../../../images/xChair/banner_xchair2_animated2.png";
import { fonts, fontSize, spacing } from "../../../styles/theme.styled";

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center;
  align-content: center;
  justify-items: center;
  align-items: center; */
  margin: 0 auto;
  gap: 40px;
`;

const SingleFeature = styled.div`
  display: flex;
  font-family: ${fonts.sans};
  /* max-width: 1200px;
  max-width: 1300px; */
  justify-content: space-evenly;
  /* margin: 0 auto; */
  flex-direction: column;
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 600px;
  }
  .contentImg {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  h4 {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: ${fontSize["3xl"]};
    margin-bottom: ${spacing[4]};
    span {
      font-weight: 300;
      font-size: ${fontSize.lg};
      margin-bottom: ${spacing[2]};
    }
  }
  p {
    font-weight: 300;
    margin: 0;
    font-size: ${fontSize["2xl"]};
  }

  @media (min-width: 768px) {
    flex-direction: ${({ leftOrRight }) =>
      leftOrRight ? "row" : "row-reverse"};
    .content {
      width: auto;
      display: flex;
      flex-direction: column;
    }
    .contentImg {
      width: auto;
      display: flex;
      justify-content: center;
    }
  }
`;
export default function ChairFeatures({ features }) {
  return (
    <FeatureWrapper>
      <SingleFeature leftOrRight>
        <div className="contentImg">
          <img
            src={Img}
            loading="lazy"
            alt="X-Chair's DVL Support adjusts itself to your body every time you move"
          />
        </div>
        <div className="content">
          <h4>
            <span>LUMBAR</span>
            Dynamic Variable Lumbar
          </h4>
          <p>
            X-Chair&apos;s DVL Support adjusts itself to your body every time
            you move. You&apos;ll stay comfortable all day without ever making
            an adjustment to your chair.
          </p>
        </div>
      </SingleFeature>
      {features &&
        features.map((feat) => (
          <SingleFeature
            key={feat.largeTitle}
            leftOrRight={feat.imageOnTheLeftOrRight}
          >
            <div className="contentImg">
              <GatsbyImage
                image={getImage(feat.featureImage)}
                alt={feat.featureImage.alt}
              />
            </div>
            <div className="content">
              <h4>
                <span>{feat.smallTitle}</span>
                {feat.largeTitle}
              </h4>
              <p>{feat.description}</p>
            </div>
          </SingleFeature>
        ))}
    </FeatureWrapper>
  );
}
