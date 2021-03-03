import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
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

const SiteMap = ({ data }) => {
  const {
    datoCmsSeo,
    allDatoCmsMattress,
    allDatoCmsNewBlog,
    adjustables,
    pillows,
    sheets,
    protectors,
    foundations,
    beautyrestMattress,
    nectarMattress,
    poshMattress,
    sealyMattress,
    sertaMattress,
    stearnsMattress,
    tempurMattress,
  } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsSeo.seoMetaTags} />
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
            <SiteLinks to="/brands">Mattresses</SiteLinks>
          </Lilist>
        </UnList>
      </MainLinks>
      <MattLinksWrapper>
        <Main>
          <h3>
            <BrandLinks to="/brands/sealy">Sealy</BrandLinks>
          </h3>
          <ul>
            {allDatoCmsMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "sealy") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/sealy/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.name}`}
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
            {allDatoCmsMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "tempurpedic") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/tempurpedic/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.name}`}
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
            {allDatoCmsMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "stearns") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/stearns/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.name}`}
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
            {adjustables.nodes.map((base) => (
              <li key={base.id}>
                <SiteLinks to={`/adjustable/${base.slug}`}>
                  {base.title}
                </SiteLinks>
              </li>
            ))}
          </ul>
        </Main>
        <Main>
          <h3>
            <BrandLinks to="/blog">Blog</BrandLinks>
          </h3>
          <ul>
            {allDatoCmsNewBlog.nodes.map((base) => (
              <li key={base.id}>
                <SiteLinks to={`/blog/${base.slug}`}>{base.title}</SiteLinks>
              </li>
            ))}
          </ul>
        </Main>
      </BottomLinks>
    </Layout>
  );
};

SiteMap.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default SiteMap;

export const allMattressesSiteMap = graphql`
  query sitmap {
    allDatoCmsNewBlog {
      nodes {
        slug
        title
        id
      }
    }
    allDatoCmsMattress(sort: { fields: priceHigh }) {
      nodes {
        slug
        name
        id
        priceLow
        subline {
          name
        }
        brand {
          urlName
          displayName
        }
      }
    }
    beautyrestMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "beautyrest" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    nectarMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "nectar" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    poshMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "posh-and-lavish" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    sealyMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "sealy" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    sertaMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "serta" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    stearnsMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "stearns" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    tempurMattress: allDatoCmsNewMattress(
      filter: { brand: { urlName: { eq: "tempurpedic" } } }
    ) {
      nodes {
        ...mattressSiteMap
      }
    }
    datoCmsSeo(name: { eq: "siteMap" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    adjustables: allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Adjustable" } } }
    ) {
      nodes {
        slug
        title
        id
      }
    }

    pillows: allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Pillow" } } }
    ) {
      nodes {
        slug
        title
        id
      }
    }
    foundations: allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Foundation" } } }
    ) {
      nodes {
        slug
        title
        id
      }
    }
    protectors: allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Protector" } } }
    ) {
      nodes {
        slug
        title
        id
      }
    }
    sheets: allDatoCmsProduct(
      filter: { typeOfProduct: { title: { eq: "Sheets" } } }
    ) {
      nodes {
        slug
        title
        id
      }
    }
  }
`;
