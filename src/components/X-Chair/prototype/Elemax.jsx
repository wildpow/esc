import styled from "@emotion/styled";
import { StaticImage } from "gatsby-plugin-image";
import coolBackground from "../../../images/xChair/elemax/cooling-background.png";
import heatBackground from "../../../images/xChair/elemax/heat-background.png";
import messageBackground from "../../../images/xChair/elemax/modes-background.png";
import intensityBackground from "../../../images/xChair/elemax/intensity-background.png";

const ElemaxRoot = styled.article`
  header {
    display: flex;
  }
  .elemaxFeatRoot {
    display: flex;
  }
  .elemaxFeatureContent {
    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
    background-position: center;
  }
  .elemaxFeatureContent img {
    width: 50px;
  }
`;
const ElemaxContent = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${(props) => props.bg});
  color: white;
  img {
    width: 50px;
  }
`;
export default function Elemax() {
  return (
    <ElemaxRoot>
      <header>
        <StaticImage
          src="../../../images/xChair/modelLogos/elemax-logo.jpeg"
          alt="Heat and Massage chair"
          formats={["avif", "webp", "auto"]}
        />
        <h3>Cooling, Heat & Massage Chair</h3>
      </header>
      <div className="elemaxFeatRoot">
        <div className="elemaxFeature">
          <div className="elemaxFeatureImg">
            <StaticImage
              src="../../../images/xChair/elemax/massage-intensity-image.jpg"
              alt="The back of an X-Chair with massage intensity setting lights on"
              formats={["avif", "webp", "auto"]}
              width={300}
            />
          </div>
          <ElemaxContent bg={coolBackground}>
            <StaticImage
              width={300}
              src="../../../images/xChair/elemax/cooling-logo.png"
              alt="icon of a snow flake"
              formats={["avif", "webp", "auto"]}
            />
            <h4>COOLING</h4>
            <p>
              ELEMAX is powered by dual fans to keep your body temperature cool
              and comfortable. Press the far left button on the panel twice. The
              LED light will glow blue and the fans will begin propelling. Press
              the same button an additional time to turn the heat and / or
              cooling function off.
              <br />
              <span>*Not available on X-HMT.</span>
            </p>
          </ElemaxContent>
        </div>

        <div className="elemaxFeature">
          <div className="elemaxFeatureImg">
            <StaticImage
              width={300}
              src="../../../images/xChair/elemax/heat-image.jpg"
              alt="The back of an X-Chair with heat setting lights on"
              formats={["avif", "webp", "auto"]}
            />
          </div>
          <ElemaxContent bg={heatBackground}>
            <h4>HEAT</h4>
            <p>
              Relax your muscles with the fast warming technology of the ELEMAX.
              Press the Heat button once to turn it on for consistent heat. The
              LED light will glow red and automatically shut off after 15
              minutes of use. If only using the Heat function your ELEMAX will
              last for up to 7 cycles when fully charged or continuously when
              plugged in. <br /> <span>55 °C / 131 °F</span>
            </p>
          </ElemaxContent>
        </div>

        <div className="elemaxFeature">
          <div className="elemaxFeatureImg">
            <StaticImage
              width={300}
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
            />
            <h4>MASSAGE MODES</h4>
            <p>
              There are two different massage mode settings on the ELEMAX -
              Constant and Variable. The Constant setting is a steady vibration
              pulse and the Variable setting is a rhythmic vibration. To select
              the massage mode you’d like to use press the Modes button once for
              Constant mode, press a second time for Variable mode and a third
              time to turn it off.
            </p>
          </ElemaxContent>
        </div>

        <div className="elemaxFeature">
          <div className="elemaxFeatureImg">
            <StaticImage
              width={300}
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
            />
            <h4>MASSAGE INTENSITY</h4>
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
    </ElemaxRoot>
  );
}
