import styled from "@emotion/styled";
import { fonts, fontSize } from "../../../styles/theme.styled";
import ModelDetails from "./ModelDetails";

const DetailSection = styled.div`
  width: 100%;
  h3 {
    font-family: ${fonts.sans};
    width: 100%;
    font-size: ${fontSize["5xl"]};
    font-weight: 400;
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
export default function Details({ logoImg }) {
  const spe = "";
  return (
    <DetailSection>
      <h3>Details</h3>
      <div className="modelWrapper">
        <ModelDetails logoImg={logoImg} />
      </div>
    </DetailSection>
  );
}
