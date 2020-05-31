import React from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
import PropTypes from "prop-types";
import { HelmetDatoCms } from "gatsby-source-datocms";
import {
  Main,
  H3,
  InfoWrapper,
  InfoWrapperReversed,
  AccWrapper,
  AccWrapper2,
  Img,
  P,
  Img2,
} from "../../styles/accessoryStyles";
import Frame from "../../images/frame.jpg";
import Pillows from "../../images/pillowCollage.jpg";
import Protector from "../../images/protector.jpg";
import Sheets from "../../images/sheetStack.jpg";
import Layout from "../../components/layout";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .btn {
    align-self: ${(props) => (props.reverse ? "flex-start" : "flex-end")};
    justify-items: flex-end;
    min-width: 180px;
    text-decoration: none;
    padding: 15px 25px;
    background-color: ${(props) => props.theme.mainColor1};
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    font-family: ${(props) => props.theme.MainFont1};
    text-transform: uppercase;
    cursor: pointer;
    &:active {
      box-shadow: 0 3px 0 #ccc;
      top: 3px;
      outline: none;
    }
    &:hover:enabled {
      background-color: #094e9b;
      color: white;
      cursor: pointer !important;
    }
    &:active:enabled {
      background: ${(props) => props.theme.mainColor1} !important;
      box-shadow: inset 0px 0px 5px #c1c1c1 !important;
      outline: none;
    }
  }
`;
const Accessories = ({ data }) => {
  return (
    <Layout>
      <Main>
        <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
        <AccWrapper>
          <H3>Pillows</H3>
          <InfoWrapper>
            <Img src={Pillows} />
            <FlexWrapper>
              <P>
                We carry a wide range of pillows from Tempur-Pedic, Technogel,
                Protect-A-Bed, Sealy, and Stearns & Foster to others. Offering a
                large selection of heights and firmnesses to compliment any
                sleeping style and body type.
              </P>
              <Link to="/accessories/list?type=pillow" className="btn">
                Shop Pillows
              </Link>
            </FlexWrapper>
          </InfoWrapper>
        </AccWrapper>
        <AccWrapper>
          <H3>Sheets</H3>
          <InfoWrapperReversed>
            <Img2 src={Sheets} />
            <FlexWrapper reverse>
              <P>
                We proudly carry the full collection of DreamFit sheets. Ranging
                from a basic microfiber to luxurious Micro Tencel. All DreamFit
                sheets are of the upmost quality and are guaranteed not to
                &quot;pop off&quot; your mattress during the night.
              </P>
              <Link to="/accessories/list?type=sheets" className="btn">
                Shop Sheets
              </Link>
            </FlexWrapper>
          </InfoWrapperReversed>
        </AccWrapper>
        <AccWrapper>
          <H3>Mattress Protectors</H3>
          <InfoWrapper>
            <Img src={Protector} />
            <FlexWrapper>
              <P>
                We carry a comprehensive selection of mattress protection
                options from Protect-A-Bed, the industry leader in mattress
                protection. With options including Tencel, Active Cooling,
                5-Sided and complete encasements protecting from spills, stains,
                and soiling.
              </P>
              <Link to="/accessories/list?type=protector" className="btn">
                Shop Protectors
              </Link>
            </FlexWrapper>
          </InfoWrapper>
        </AccWrapper>
        {/* <AccWrapper2>
          <H3>Bed Frames</H3>
          <InfoWrapperReversed>
            <Img2 src={Frame} />
            <P>
              Leggett & Platt makes some of the best metal supports and
              decorative frames on the market. Whether you need a basic frame to
              lift your mattress set off the ground, or want something to bring
              your room to life we have an option for you here.
            </P>
            <Link to="/accessories/list?type=frames">Shop Frames</Link>
          </InfoWrapperReversed>
        </AccWrapper2> */}
      </Main>
    </Layout>
  );
};

Accessories.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export const accessoriesSEO = graphql`
  query accessoriesSEO {
    datoCmsSeo(name: { eq: "accessories" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;

export default Accessories;
