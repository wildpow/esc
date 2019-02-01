import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import {
  MainWrapper,
  Wrapper,
  LinkWrapper,
  MainTitle,
  StearnsImgPlaceHolder,
  StyledLink,
  MattImg,
  Name,
  PriceRange,
  Divy,
} from "../../styles/mattListStyles";
import Layout from "../../components/layout";
import logo from "../../images/logo.png";
import StearnsImg from "../../images/stearnsLogo.png";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";

const Stearns = ({ data }) => {
  const { edges } = data.allMattress;
  const title = "stearns";
  return (
    <Layout>
      <Helmet>
        <title>ESC: Stearns & Foster Mattresses</title>
        <meta
          name="description"
          content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center" />
        <meta property="og:url" content="https://www.escmattresscenter.com/" />
        <meta property="og:image" content={logo} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          property="og:image:alt"
          content="E.S.C Mattress Center's logo of a panda"
        />
        <meta
          property="og:title"
          content="E.S.C. Mattress Center | Stearns and Foster"
        />
        <meta
          property="og:description"
          content="One of the oldest mattress manufactures in in the US, Stearns and Foster offers traditional luxury that you deserve. Come feel the luxury your body deserves on the new Stearns and Foster lines.  Raise your expectations with an adjustable base for the ultimate in comfort."
        />
      </Helmet>
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
          {edges.map(mattress => (
            <LinkWrapper key={mattress.node.id}>
              <StyledLink to={`/brands/${title}/${mattress.node.uri}`}>
                <Divy>
                  <MattImg
                    src={`https://media.graphcms.com/resize=w:250,h:250,fit:clip/${
                      mattress.node.coverImg.handle
                    }`}
                    alt={`Image of a ${mattress.node.brandName} ${
                      mattress.node.subBrand
                    } ${mattress.node.subName} mattress`}
                  />
                  <PriceRange>
                    {`$${mattress.node.priceRange[0]} 
                    - $${mattress.node.priceRange[1]}`}
                  </PriceRange>
                </Divy>
                <Name>
                  {mattress.node.brandName}
                  <br />
                  {mattress.node.subBrand}
                  <br />
                  {mattress.node.subName}
                </Name>
              </StyledLink>
            </LinkWrapper>
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
