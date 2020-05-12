import React from "react";
import { graphql } from "gatsby";
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
} from "../styles/accessoryStyles";
import Frame from "../images/frame.jpg";
import Pillows from "../images/pillowCollage.jpg";
import Protector from "../images/protector.jpg";
import Sheets from "../images/sheetStack.jpg";
import Layout from "../components/layout";

const Accessories = ({ data }) => (
  <Layout>
    {console.log(data)}
    <Main>
      <HelmetDatoCms seo={data.datoCmsSeo.seoMetaTags} />
      <AccWrapper>
        <H3>Pillows</H3>
        <InfoWrapper>
          <Img src={Pillows} />
          <P>
            We carry a wide range of pillows from Tempur-Pedic, Technogel,
            Protect-A-Bed, Sealy, and Stearns & Foster to others. Offering a
            large selection of heights and firmnesses to compliment any sleeping
            style and body type.
          </P>
        </InfoWrapper>
        <div>
          {/* {data.pillow.map(p => {
            <div key={title}>
              <img src={p.images} alt="" />
            </div>;
          })} */}
        </div>
      </AccWrapper>
      <AccWrapper>
        <H3>Sheets</H3>
        <InfoWrapperReversed>
          <Img2 src={Sheets} />
          <P>
            We proudly carry the full collection of DreamFit sheets. Ranging
            from a basic microfiber to luxurious Micro Tencel. All DreamFit
            sheets are of the upmost quality and are guaranteed not to &quot;pop
            off&quot; your mattress during the night.
          </P>
        </InfoWrapperReversed>
      </AccWrapper>
      <AccWrapper>
        <H3>Mattress Protectors</H3>
        <InfoWrapper>
          <Img src={Protector} />
          <P>
            We carry a comprehensive selection of mattress protection options
            from Protect-A-Bed, the industry leader in mattress protection. With
            options including Tencel, Active Cooling, 5-Sided and complete
            encasements protecting from spills, stains, and soiling.
          </P>
        </InfoWrapper>
      </AccWrapper>
      <AccWrapper2>
        <H3>Bed Frames</H3>
        <InfoWrapperReversed>
          <Img2 src={Frame} />
          <P>
            Leggett & Platt makes some of the best metal supports and decorative
            frames on the market. Whether you need a basic frame to lift your
            mattress set off the ground, or want something to bring your room to
            life we have an option for you here.
          </P>
        </InfoWrapperReversed>
      </AccWrapper2>
    </Main>
  </Layout>
);

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
    pillow: allShopifyProduct(filter: { productType: { eq: "pillow" } }) {
      nodes {
        title
        shopifyId
        vendor
        availableForSale
        variants {
          shopifyId
          price
        }
        description
        title
        images {
          originalSrc
        }
        priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
      }
    }
  }
`;

export default Accessories;
