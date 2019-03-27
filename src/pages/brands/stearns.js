import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  StearnsImgPlaceHolder,
} from "../../styles/mattListStyles";
import Layout from "../../components/layout";
import StearnsImg from "../../images/stearnsLogo.png";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";
import MattressThumb from "../../components/mattThumbNail/mattThumb";
import SEO from "../../components/seo";

const Stearns = ({ data }) => {
  const { allMattresses } = data.gcms;
  const title = "stearns";
  return (
    <Layout>
      <SEO
        title="ESC: Stearns & Foster Mattresses"
        description="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."
        ogTitle="E.S.C. Mattress Center | Stearns and Foster"
      />
      <MainWrapper>
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Stearns" />
        </BreadWrapper>
        <MainTitle>
          <StearnsImgPlaceHolder
            src={StearnsImg}
            alt="Logo of the Stearns and Foster mattress company"
          />
        </MainTitle>
        <Wrapper>
          {allMattresses.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${title}/${mattress.uri}`}
            />
          ))}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="stearns" />
        </BreadWrapper>
      </MainWrapper>
    </Layout>
  );
};

Stearns.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export default Stearns;

export const stearnsMattresses = graphql`
  query stearnsMattresses {
    gcms {
      allMattresses(
        orderBy: orderByPrice_ASC
        filter: { brandName: "Stearns & Foster", isPublished: true }
      ) {
        brandName
        saleBanner
        uri
        id
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
