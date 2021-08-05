/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import styled from "@emotion/styled";
import "reactjs-popup/dist/index.css";
import QuestionMark from "../../../svgs/question-circle-solid.svg";
import { fonts } from "../../../styles/theme.styled";

const StyledPopup = styled(Popup)`
  &-content {
    font-family: ${fonts.sans};
    padding: 15px;
  }
  /* &-arrow {
    padding-left: 4px;
  } */
`;
const PopupButton = styled.button`
  width: 35px;
  border: none;
  background: none;
`;
export default function FeaturePopup({ content }) {
  return (
    <StyledPopup
      on={["hover", "focus"]}
      trigger={() => (
        <PopupButton className="button" type="button">
          <QuestionMark />
        </PopupButton>
      )}
      position="top center"
      closeOnDocumentClick
      closeOnEscape
      repositionOnResize
      keepTooltipInside
      arrow="center center"
    >
      <span>{content}</span>
    </StyledPopup>
  );
}
