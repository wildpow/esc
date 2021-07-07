/* eslint-disable react/prop-types */
import styled from "@emotion/styled";
import { fonts, fontSize, spacing } from "../../../styles/theme.styled";
import ModelDetails from "./ModelDetails";
import ChairFeatures from "./ChairFeatures";

const DetailSection = styled.div`
  width: 100%;
  padding: 0 ${spacing[4]};

  h3 {
    margin-bottom: ${spacing[3]};
    font-family: ${fonts.sans};
    width: 100%;
    font-size: ${fontSize["5xl"]};
    font-weight: 500;
    position: relative;
    ::after {
      content: "";
      height: 3px;
      width: 100%;
      position: absolute;
      background-color: #ec1221;
      bottom: 0;
      left: 0;
    }
  }
  .modelWrapper {
  }
`;
export default function Details({ logoImg, features }) {
  const spe = "";
  return (
    <DetailSection>
      <h3>Details</h3>
      <div className="modelWrapper">
        <ModelDetails logoImg={logoImg} />
      </div>
      <ChairFeatures features={features} />
    </DetailSection>
  );
}
