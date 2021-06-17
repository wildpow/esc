import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import styled from "@emotion/styled";

<div>
  <h2>Wheels</h2>
  <div style={{ display: "flex" }}>
    <Checkbox>
      <input type="checkbox" id="noHeadrest" className="borderOneInput" />
      <label htmlFor="noHeadrest" className="borderOneLabel">
        <div>
          <StaticImage
            alt="alt stuff"
            src="../images/xChair/standardCasterSet.jpeg"
            layout="constrained"
            width={150}
            height={103}
          />
        </div>
      </label>
    </Checkbox>
    {wheels.variants.map((wheel) => (
      <Checkbox key={wheel.title}>
        <input
          type="checkbox"
          id="headrest"
          className="borderOneInput"
          // onChange={() => setHeadrestBool(!headrestBool)}
          // checked={headrestBool}
        />
        <label htmlFor="headrest" className="borderOneLabel">
          <div>
            <GatsbyImage image={wheel.image.gatsbyImageData} alt="alt stuff" />
          </div>
        </label>
      </Checkbox>
    ))}
  </div>
</div>;
