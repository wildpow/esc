/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import "reactjs-popup/dist/index.css";
import QuestionMark from "../../../svgs/question-circle-solid.svg";
import { fonts } from "../../../styles/theme.styled";

const X4popup = styled.div`
  /* padding: 40px;
  display: flex; */
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .popupCard {
    width: 100%;
    display: flex;
    flex: 1;
    /* max-width: 250px; */
  }
  .popupCardImg {
    width: 30%;
  }
  .popupCardContent {
    width: 70%;
  }
`;
const PopupButton = styled.button`
  width: 35px;
  border: none;
  background: none;
`;
export default function X4featurePopup() {
  const contentStyle = { width: "auto" };

  return (
    <Popup
      // on={["hover", "focus"]}
      // {...{ contentStyle }}
      trigger={() => (
        <PopupButton className="button" type="button">
          <QuestionMark />
        </PopupButton>
      )}
      // position="center center"
      // closeOnDocumentClick
      // closeOnEscape
      // repositionOnResize
      // keepTooltipInside
      // arrow="center center"
      keepTooltipInside
      position={["top center", "bottom right", "bottom left"]}
    >
      {/* <X4popup> */}
      <ContentWrapper>
        <div className="popupCard">
          <div className="popupCardImg">
            <StaticImage
              src="../../../images/xChair/x4Popup/l.png"
              alt="t"
              layout="constrained"
              width={200}
            />
          </div>
          <div className="popupCardContent">
            <h5>Leather</h5>
            <p>
              Top Grain Leather (Brown, Cognac, Black) - High quality leather
              that is strong and resistant to stains. Featured in Black, Cognac
              and Brown our Top Grain Leather is designed to impress.
            </p>
            <div className="popupColors">
              <div>Black</div>
              <div>Cognac</div>
            </div>
          </div>
        </div>
        <div className="popupCard">
          <div className="popupCardImg">
            <StaticImage
              src="../../../images/xChair/x4Popup/pl.png"
              alt="t"
              layout="constrained"
              width={200}
            />
          </div>
          <div className="popupCardContent">
            <h5>Premium Leather</h5>
            <p>
              Premium Leather (Red, White) - Offers a familiar feel to other
              executive chairs that is luxurious and durable. Available in White
              and Red this premium leather is destined to fit your work or home
              office stylishly.
            </p>
            <div className="popupColors">
              <div>White</div>
              <div>Red</div>
            </div>
          </div>
        </div>
        <div className="popupCard">
          <StaticImage
            src="../../../images/xChair/x4Popup/b.png"
            alt="t"
            layout="constrained"
            width={200}
          />
          <div className="popupCardContent">
            <h5>Brisa</h5>
            <p>
              Brisa (Rose, Brown, Black) is a handcrafted and revolutionary
              innovation that features unique breathable attributes to elevate
              the seating experience. With a stunning and softly textured
              aesthetic, Brisa is truely a fabric made for the senses.
            </p>
            <div className="popupColors">
              <div>Black</div>
              <div>Brown</div>
              <div>Rose</div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      {/* </X4popup> */}
    </Popup>
  );
}
