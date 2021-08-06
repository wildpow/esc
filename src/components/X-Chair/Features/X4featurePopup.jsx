/* eslint-disable react/prop-types */
import Popup from "reactjs-popup";
import styled from "@emotion/styled";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import "reactjs-popup/dist/index.css";
import QuestionMark from "../../../svgs/question-circle-solid.svg";
import {
  colors,
  fonts,
  fontSize,
  breakpoints,
} from "../../../styles/theme.styled";

const X4popup = styled(Popup)`
  &-content {
    width: 85% !important;
    max-width: 550px;
  }
  @media (min-width: ${breakpoints.md}) {
    &-content {
      width: 45%;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  gap: 30px;
  font-family: ${fonts.sans};
  .popupCard {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .popupCardImg {
    width: 100%;
  }
  .popupCardContent {
    width: 100%;
    /* padding-right: 10px; */
    padding-left: 10px;
    h5 {
      margin: 0;
      font-size: ${fontSize.lg};
    }
    p {
      font-weight: 400;
      max-width: 255px;
    }
  }
  .popupColors {
    display: flex;
    gap: 20px;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
  }
  .smImg {
    border-radius: 50%;
    border: 1px solid ${colors.gray["800"]};
  }
  @media (min-width: ${breakpoints.md}) {
    .popupCardContent {
      width: 70%;
    }
    .popupCardImg {
      width: 30%;
    }
    .popupCard {
      flex-direction: row;
    }
  }
`;
const PopupButton = styled.button`
  width: 35px;
  border: none;
  background: none;
`;
export default function X4featurePopup() {
  // const contentStyle = { width: "45%", maxWidth: "550px" };

  return (
    <X4popup
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
      closeOnEscape
      repositionOnResize
      // keepTooltipInside
      closeOnDocumentClick
      // position={["top center", "bottom right", "bottom left"]}
      // arrow={["top center", "bottom right", "bottom left"]}
      arrow="top center"
      position="bottom right"
    >
      {/* <X4popup> */}
      <ContentWrapper>
        <div className="popupCard">
          <div className="popupCardImg">
            <StaticImage
              src="../../../images/xChair/x4Popup/l.png"
              alt="t"
              layout="constrained"
              width={150}
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
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/black/black-leather.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Black
              </div>
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/cognac/cognac-leather.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Cognac
              </div>
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/brown/brown-leather.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                brown
              </div>
            </div>
          </div>
        </div>
        <div className="popupCard">
          <div className="popupCardImg">
            <StaticImage
              src="../../../images/xChair/x4Popup/pl.png"
              alt="t"
              layout="constrained"
              width={150}
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
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/white/attribute_swatch_0005_x4white.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                White
              </div>
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/red/attribute_swatch_0004_x4red.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Red
              </div>
            </div>
          </div>
        </div>
        <div className="popupCard">
          <div className="popupCardImg">
            <StaticImage
              src="../../../images/xChair/x4Popup/b.png"
              alt="t"
              layout="constrained"
              width={150}
            />
          </div>
          <div className="popupCardContent">
            <h5>Brisa</h5>
            <p>
              Brisa (Rose, Brown, Black) is a handcrafted and revolutionary
              innovation that features unique breathable attributes to elevate
              the seating experience. With a stunning and softly textured
              aesthetic, Brisa is truely a fabric made for the senses.
            </p>
            <div className="popupColors">
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/blackBrisa/black_1_1.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Black
              </div>
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/brownBrisa/brown.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Brown
              </div>
              <div>
                <StaticImage
                  alt="st"
                  src="../../../images/xChair/xFour/rose/rose.jpg"
                  className="smImg"
                  width={30}
                  height={30}
                  layout="fixed"
                />
                Rose
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
      {/* </X4popup> */}
    </X4popup>
  );
}
