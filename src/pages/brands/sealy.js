import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  SealyImgPlace,
} from "../../styles/mattListStyles";
import SealyImg from "../../images/sealyLogo.png";
import SEO from "../../components/seo";
import MattressThumb from "../../components/mattThumbNail/mattThumb";

const Sealy = ({ data }) => {
  const { allMattresses } = data.gcms;
  const title = "sealy";
  return (
    <Layout>
      <MainWrapper>
        <SEO
          title="ESC: Sealy Mattresses"
          description="One of the worlds most recognized brands, Sealy offers all three styles of mattresses: Traditional innerspring, Hybrid, a mix of traditional and all foam, and all foam option. The Sealy line up offers a little something for everyone."
          ogTitle="E.S.C. Mattress Center | Sealy"
        />
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
        <MainTitle>
          <SealyImgPlace
            src={SealyImg}
            alt="A logo of the Sealy mattress company"
          />
        </MainTitle>
        <Wrapper>
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Golden Elegance") {
                return (
                  <>
                    <MattressThumb
                      key={mattress.id}
                      mattress={mattress}
                      url={`/brands/${title}/${mattress.uri}`}
                    />
                  </>
                );
              }
              return null;
            }
            return null;
          })}
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Essentials") {
                return (
                  <MattressThumb
                    key={mattress.id}
                    mattress={mattress}
                    url={`/brands/${title}/${mattress.uri}`}
                  />
                );
              }
              return null;
            }
            return null;
          })}
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Performance") {
                return (
                  <MattressThumb
                    key={mattress.id}
                    mattress={mattress}
                    url={`/brands/${title}/${mattress.uri}`}
                  />
                );
              }
              return null;
            }
            return null;
          })}
          {allMattresses.map(mattress => {
            if (mattress.subLine !== null) {
              if (mattress.subLine.subLineName === "Premium ") {
                return (
                  <MattressThumb
                    key={mattress.id}
                    mattress={mattress}
                    url={`/brands/${title}/${mattress.uri}`}
                  />
                );
              }
              return null;
            }
            return null;
          })}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Sealy" />
        </BreadWrapper>
      </MainWrapper>
    </Layout>
  );
};

Sealy.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Sealy;

export const allMattresses = graphql`
  query allMattresses {
    gcms {
      allMattresses(orderBy: orderByPrice_ASC, filter: { isPublished: true }) {
        brandName
        saleBanner
        uri
        id
        subLine {
          subLineName
        }
        subName
        subBrand
        priceRange
        coverImg {
          handle
        }
      }
    }
  }
`;
