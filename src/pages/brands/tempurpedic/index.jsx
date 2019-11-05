import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "styled-components";
import Layout from "../../../components/layout";
import {
  MainWrapper,
  Wrapper,
  MainTitle,
  Img,
} from "../../../styles/mattListStyles";
import BreadCrumbs, { BreadWrapper } from "../../../components/breadCrumbs";
import TempurImg from "../../../images/tempurLogo2.png";
import MattressThumb from "../../../components/mattThumbNail/mattThumb";

const NewThing = styled.header`
  display: flex;
  margin-right: 60px;
  margin-left: 60px;
  border-bottom: 2px solid ${props => props.theme.mainColor1};
  /* border-top: 2px solid ${props => props.theme.mainColor1}; */
  /* border-bottom: 2px solid ${props => props.theme.mainColor1}; */
  /* border: 1px solid gray; */
  margin-bottom: 20px;
  background-color: ${props => props.theme.newColor1};
  justify-content: center;
  a {
    justify-self: flex-end;
    text-decoration: none;
    text-align: center;
    background-color: ${props => props.theme.mainColor1};
    border-radius: 4px;
    border: 1px solid #ccc;
    color: white;
    font-family: ${props => props.theme.MainFont1};
    text-transform: uppercase;
    transform-style: flat;
    transition: all ease 0.3s;
    letter-spacing: 0.18rem;
    font-size: 0.8rem;
    width: 120px;
    margin: 0 auto;
    padding: 5px;
    &:active {
      box-shadow: 0 3px 0 #ccc;
      top: 3px;
      outline: none;
    }
    &:hover:enabled {
      background-color: ${props => props.theme.mainColor2};
      color: white;
      cursor: pointer !important;
    }
    &:active:enabled {
      background: ${props => props.theme.mainColor1} !important;
      box-shadow: inset 0px 0px 5px #c1c1c1 !important;
      outline: none;
    }
    @media (min-width: 360px) {
      width: 130px;
    }
    @media (orientation: landscape) and (max-width: 568px) {
      width: 160px;
    }
    @media (orientation: landscape) and (min-width: 569px) {
      width: 180px;
      padding: 7px;
    }
    /* @media (orientation: landscape) and (min-width: 811px) {
      width: 220px;
      padding: 10px;
      font-size: 1.2rem;
    }
    @media (min-width: 768px) and (orientation: portrait) {
      width: 260px;
      letter-spacing: 0.25rem;
      font-size: 1.4rem;
      margin: 5px auto;
      padding: 10px;
      align-self: flex-end;
    }
    @media (min-width: 1024px) {
      align-self: center;
      margin: 5px 0px 5px 5px;
    }
    @media (min-width: 1300px) {
      font-size: 1.7rem;
      margin: 5px 0px 5px 5px;
      width: 300px;
    } */
  }
  img {
    background: ${props => props.theme.newColor1};
    align-self: center;
    /* margin: auto; */
    margin-top: 5px;
    margin-bottom: 5px;
    max-height: 10rem;
    max-width: 10rem;
    @media (min-width: 768px) {
      max-height: 15rem;
      max-width: 15rem;
      margin-top: 10px;
      margin-bottom: 10px;
    }
    @media (min-width: 1024px) {
      max-height: 20rem;
      max-width: 20rem;
    }
  }
  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
    /* max-width: 500px; */
    font-family: ${props => props.theme.MainFont3};
    font-weight: 300;
  }
`;

const Tempurpedic = ({ data }) => {
  const { datoCmsSeo, allDatoCmsMattress } = data;
  return (
    <Layout>
      <MainWrapper>
        <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
        <BreadWrapper Brands>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
        <NewThing>
          <img src={TempurImg} alt="Logo of the Tempurpedic mattress company" />
          <div>
            <p>
              Come see JD Power’s Consumers choice award winner for 2017.
              {/* <Link to="brands/tempurpedic/landing">Learn more...</Link> */}
            </p>
            <Link to="brands/tempurpedic/landing">Learn more</Link>
          </div>
        </NewThing>
        <Wrapper>
          {allDatoCmsMattress.nodes.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
            />
          ))}
        </Wrapper>
        <BreadWrapper Brands Bottom>
          <BreadCrumbs next="Brands" here="Tempurpedic" />
        </BreadWrapper>
      </MainWrapper>
    </Layout>
  );
};

Tempurpedic.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Tempurpedic;

export const tempurpedicMatt = graphql`
  query tempurpedic {
    datoCmsSeo(name: { eq: "tempurpedic mattresses" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsMattress(
      filter: { brand: { urlName: { eq: "tempurpedic" } } }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
  }
`;
