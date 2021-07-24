import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import coolBackground from "../../../images/xChair/elemax/cooling-background.png";
import heatBackground from "../../../images/xChair/elemax/heat-background.png";
import messageBackground from "../../../images/xChair/elemax/modes-background.png";
import intensityBackground from "../../../images/xChair/elemax/intensity-background.png";
import { fonts, fontSize } from "../../../styles/theme.styled";
import HeatIcon from "../../../svgs/icon-heat.svg";

const ElemaxRoot = styled.article`
  font-family: ${fonts.sans};
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h4 {
      margin: 0;
      text-align: center;
      font-size: ${fontSize.xl};
    }
    .topLogo {
      max-width: 250px;
    }
  }
  .flexContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .elemaxFeatRoot {
    display: flex;
    flex-direction: column;
  }
  .elemaxFeature {
    flex: 1;
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 768px) {
    header {
      flex-direction: row;
      justify-content: flex-start;

      align-items: center;
      h4 {
        font-size: ${fontSize["2xl"]};
        text-align: start;

        padding-left: 30px;
      }
    }

    .elemaxFeatRoot {
      /* max-height: 650px; */
      flex-direction: column;
    }
    .elemaxFeature {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    .flexContainer {
      flex-direction: row;
    }
  }
  .elemaxFeatureContent {
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-position: center;
  }
  /* .elemaxFeatureContent img {
    width: 50px;
  } */
  @media (min-width: 1028px) {
    .flexContainer {
      flex-direction: row;
    }
    .elemaxFeatRoot {
      max-height: 700px;
      flex-direction: row;
    }
  }
`;
const ElemaxContent = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  flex: 1;
  background-size: cover;
  padding: 10px 25px 10px 25px;
  background-image: url(${(props) => props.bg});
  color: white;
  /* height: 100%; */
  /* max-height: 270px;
  height: 100%;
  flex: 1; */
  h5 {
    font-size: ${fontSize.xl};
    margin-top: 0%;
  }
  img,
  svg {
    width: 65px;
    /* padding-top: 20px; */
  }
  .elemaxFeatureImg {
    width: 100%;
  }
`;
export default function Elemax() {
  return (
    <ElemaxRoot>
      <header>
        <div className="topLogo">
          <StaticImage
            src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
            alt="Heat and Massage chair"
            formats={["avif", "webp", "auto"]}
          />
        </div>
        <h4>Cooling, Heat & Massage Chair</h4>
      </header>
      <div className="elemaxFeatRoot">
        <div className="flexContainer">
          <div className="elemaxFeature">
            <div className="elemaxFeatureImg">
              <StaticImage
                src="../../../images/xChair/elemax/cooling-image.jpg"
                alt="The back of an X-Chair with cooling setting lights on"
                formats={["avif", "webp", "auto"]}
                width={600}
              />
            </div>
            <ElemaxContent bg={coolBackground}>
              <StaticImage
                width={65}
                layout="fixed"
                src="../../../images/xChair/elemax/cooling-logo.png"
                alt="icon of a snow flake"
                formats={["avif", "webp", "auto"]}
              />
              <h5>COOLING</h5>
              <p>
                ELEMAX is powered by dual fans to keep your body temperature
                cool and comfortable. Press the far left button on the panel
                twice. The LED light will glow blue and the fans will begin
                propelling. Press the same button an additional time to turn the
                heat and / or cooling function off.
                <br />
                <span>*Not available on X-HMT.</span>
              </p>
            </ElemaxContent>
          </div>
          <div className="elemaxFeature">
            <div className="elemaxFeatureImg">
              <StaticImage
                width={600}
                src="../../../images/xChair/elemax/heat-image.jpg"
                alt="The back of an X-Chair with heat setting lights on"
                formats={["avif", "webp", "auto"]}
              />
            </div>
            <ElemaxContent bg={heatBackground}>
              <HeatIcon />
              <h5>HEAT</h5>
              <p>
                Relax your muscles with the fast warming technology of the
                ELEMAX. Press the Heat button once to turn it on for consistent
                heat. The LED light will glow red and automatically shut off
                after 15 minutes of use. If only using the Heat function your
                ELEMAX will last for up to 7 cycles when fully charged or
                continuously when plugged in. <br /> <span>55 °C / 131 °F</span>
              </p>
            </ElemaxContent>
          </div>
        </div>

        <div className="flexContainer">
          <div className="elemaxFeature">
            <div className="elemaxFeatureImg">
              <StaticImage
                width={600}
                src="../../../images/xChair/elemax/modes-image.jpg"
                alt="The back of an X-Chair with massage setting lights on"
                formats={["avif", "webp", "auto"]}
              />
            </div>
            <ElemaxContent bg={messageBackground}>
              <StaticImage
                src="../../../images/xChair/elemax/massage-modes-logo.png"
                alt="An icon repersenting the massage feature of Elemax"
                formats={["avif", "webp", "auto"]}
                width={65}
                layout="fixed"
              />
              <h5>MASSAGE MODES</h5>
              <p>
                There are two different massage mode settings on the ELEMAX -
                Constant and Variable. The Constant setting is a steady
                vibration pulse and the Variable setting is a rhythmic
                vibration. To select the massage mode you’d like to use press
                the Modes button once for Constant mode, press a second time for
                Variable mode and a third time to turn it off.
              </p>
            </ElemaxContent>
          </div>
          <div className="elemaxFeature">
            <div className="elemaxFeatureImg">
              <StaticImage
                width={600}
                src="../../../images/xChair/elemax/massage-intensity-image.jpg"
                alt="The back of an X-Chair with massage intensity setting lights on"
                formats={["avif", "webp", "auto"]}
              />
            </div>
            <ElemaxContent bg={intensityBackground}>
              <StaticImage
                src="../../../images/xChair/elemax/massage-intensity-logo.png"
                alt="An icon repersenting the massage intensity settings of Elemax"
                formats={["avif", "webp", "auto"]}
                width={65}
                layout="fixed"
              />
              <h5>MASSAGE INTENSITY</h5>
              <p>
                The ELEMAX has two levels of massage intensity - Gentle and
                Powerful. Press the power buton once for the Gentle setting, two
                green lights will show on the button panel. Press the Massage
                Intensity button once for the Powerful intensity to begin, you
                will see a yellow and green light.
              </p>
            </ElemaxContent>
          </div>
        </div>
      </div>
    </ElemaxRoot>
  );
}
