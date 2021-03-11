import styled from "styled-components";
import { colors, fonts, fontSize, spacing } from "../../../utils/styles";
import FoundationCompat from "../FoundationCompat";
import FeatureList from "../../shared/SingleProduct/FeatureList";
import {
  // Article,
  Description,
  // Main,
  // MainInfo,
  MainTitle,
  // Profile,
  // Warranty,
  // Wrapper,
} from "../../shared/SingleProduct/SingleProduct.styled";

const DescriptionRoot = styled.section`
  .bottomSpacing {
    margin-bottom: 20px;
  }
  .extra {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    font-family: ${fonts.sans};
    h5 {
      margin-right: 20px;
      font-weight: 500;
      padding-bottom: 2px;
      border-bottom: 4px solid ${colors.blue[800]};
    }
  }
  background-color: ${colors.gray[200]};
  header {
    background-color: ${colors.red[800]};
    h3 {
      text-align: center;
      padding-left: 8px;
      margin: 0 auto;
      max-width: 1000px;
    }
  }
  .wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding-right: 8px;
    padding-left: 8px;
  }
  @media (min-width: 768px) {
    header {
      h3 {
        padding-left: 20px;
      }
    }
    .wrapper {
      padding-right: 20px;
      padding-left: 20px;
    }
    .extra {
      justify-content: flex-end;
    }
  }
  @media print {
    margin-top: -25px;
    .wrapper {
      padding-right: 0px;
      padding-left: 0px;
    }
    .bottomSpacing {
      margin-bottom: 0px;
      margin-top: -25px;
    }
    .extra {
      justify-content: flex-end;
    }
  }
`;
const DescriptionBottom = styled(Description)`
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  @media print {
    margin: 0;
    padding: 0;
  }
`;
const MainTitleBottom = styled(MainTitle)`
  padding-left: 0px;
  text-align: start;
  @media (max-width: 1000px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;
export default function DescriptionSection({
  warranty,
  profile,
  description,
  featureList,
  width,
}) {
  return (
    <DescriptionRoot>
      <header id="moreInfo">
        <MainTitleBottom red as="h3">
          OVERVIEW & SPECS
        </MainTitleBottom>
      </header>
      <div className="wrapper">
        <DescriptionBottom>{description}</DescriptionBottom>
        <div className="extra bottomSpacing">
          <h5>{`Warranty: ${warranty}`}</h5>
          <h5>{`Profile: ${profile}"`}</h5>
        </div>
        <div className="bottomSpacing">
          <FeatureList list={featureList} width={width} />
        </div>
        <div className="bottomSpacing">
          <FoundationCompat />
        </div>
      </div>
    </DescriptionRoot>
  );
}
