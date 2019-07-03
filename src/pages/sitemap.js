import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  Main,
  SiteLinks,
  MainLinks,
  MattLinksWrapper,
  BrandLinks,
  UnList,
  Lilist,
  BottomLinks,
} from "../styles/siteMapStyles";
import { H2 } from "../styles/mainStyles";
import AdjSiteMapData from "../components/adjSiteMapData";
import BlogSiteMapData from "../components/blogSiteMapData";
import SEO from "../components/seo";

const SiteMap = ({ data }) => (
  <Layout>
    <SEO
      title="ESC: Site Map"
      description="Sitemap for E.S.C Mattress Center website"
      ogTitle="E.S.C. Mattress Center | Site Map"
    />
    <MainLinks>
      <H2>Main Site Links</H2>
      <UnList>
        <Lilist>
          <SiteLinks to="/">Home</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/current-sale">Sale</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/about">About</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/accessories">Accessories</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/financing">Financing</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/adjustable">Adjustable</SiteLinks>
        </Lilist>
        <Lilist>
          <SiteLinks to="/brands">Brands</SiteLinks>
        </Lilist>
      </UnList>
    </MainLinks>
    <MattLinksWrapper>
      <Main>
        <h3>
          <BrandLinks to="/brands/sealy">Sealy</BrandLinks>
        </h3>
        <ul>
          {data.gcms.allMattresses.map(mattress => {
            if (mattress.brandName === "Sealy") {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/sealy/${mattress.uri}`}>
                    {`${mattress.subBrand} ${mattress.subName}`}
                  </SiteLinks>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </Main>
      <Main>
        <h3>
          <BrandLinks to="/brands/tempurpedic">Tempurpedic</BrandLinks>
        </h3>
        <ul>
          {data.gcms.allMattresses.map(mattress => {
            if (mattress.brandName === "Tempur-PEDIC") {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/tempurpedic/${mattress.uri}`}>
                    {`${mattress.subBrand} ${mattress.subName}`}
                  </SiteLinks>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </Main>
      <Main>
        <h3>
          <BrandLinks to="/brands/stearns">Stearns & Foster</BrandLinks>
        </h3>
        <ul>
          {data.gcms.allMattresses.map(mattress => {
            if (mattress.brandName === "Stearns & Foster") {
              return (
                <li key={mattress.id}>
                  <SiteLinks to={`/brands/stearns/${mattress.uri}`}>
                    {`${mattress.subBrand} ${mattress.subName}`}
                  </SiteLinks>
                </li>
              );
            }
            return null;
          })}
        </ul>
      </Main>
    </MattLinksWrapper>
    <BottomLinks>
      <Main>
        <h3>
          <BrandLinks to="/adjustable">Adjustable Bases</BrandLinks>
        </h3>
        <ul>
          <AdjSiteMapData />
        </ul>
      </Main>
      <Main>
        <h3>
          <BrandLinks to="/blog">Blog</BrandLinks>
        </h3>
        <ul>
          <BlogSiteMapData />
        </ul>
      </Main>
    </BottomLinks>
  </Layout>
);

SiteMap.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default SiteMap;

export const allMattressesSiteMap = graphql`
  query allMattressesSiteMap {
    gcms {
      allMattresses(orderBy: orderByPrice_ASC, filter: { isPublished: true }) {
        brandName
        id
        subBrand
        subName
        uri
      }
    }
  }
`;
