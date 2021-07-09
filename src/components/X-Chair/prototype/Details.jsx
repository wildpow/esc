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
export default function Details({ logoImg, features, extraFeatureText }) {
  const spe = "";
  return (
    <DetailSection>
      <h3>Details</h3>
      <div className="modelWrapper">
        <ModelDetails logoImg={logoImg} />
      </div>
      <ChairFeatures features={features} />
      <h3>More Information</h3>
      <div>
        {extraFeatureText && (
          <div>
            <h4>Features</h4>
            <div>
              <p>{extraFeatureText}</p>
            </div>
          </div>
        )}
        <div>
          <h4>Warranty</h4>
          <div>
            <p>
              All moving parts and materials are warranted for 5 years. During
              this time, X-Chair™ will provide replacement parts for any damage
              that is due to defect in material or workmanship. For the first 2
              years, X-Chair™ will bear the entire cost of replacement parts and
              shipping. For the next 3 years, X-Chair™ will bear the cost of the
              replacement parts, but the customer will be liable for the cost of
              shipping.
            </p>
            <p>
              All non-moving metal components of the chair are warranted for an
              additional 10 years (for a total of 15 years).
            </p>
            <p>
              The customer must provide appropriate pictures of their damaged
              product if requested.
            </p>
            <p>
              A defect in material or workmanship does not include damage to a
              product, or failure of a product to operate or perform properly or
              to maintain appearance, caused by (1) misuse or abuse of the
              product; (2) improper assembly or assembly that was not as
              recommended by the written assembly instructions; (3) normal wear
              and tear; (4) a natural disaster or an Act of God; (5) an
              unauthorized modification made without the express written consent
              of X-Chair™; (6) improper storage; (7) the natural aging of
              materials such as wood, leather, and fabric which results in
              colors shifting during use; (8) crocking or reverse crocking of
              dyes from clothing on our seating materials. Products damaged in
              these ways will not be considered defective and will therefore not
              be repaired, replaced, or refunded.
            </p>
            <p>
              We shall not have tort liability with respect to a product, and we
              shall not be liable for any consequential, economic, indirect,
              special, punitive, or incidental damages arising from a product
              defect.
            </p>
          </div>
        </div>
      </div>
    </DetailSection>
  );
}
