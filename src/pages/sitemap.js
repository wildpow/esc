import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
import MatttressListSitemap from "../components/Sitemap/MattressListSiteMap";
// import {
//   Main,
//   SiteLinks,
//   MainLinks,
//   MattLinksWrapper,
//   BrandLinks,
//   UnList,
//   Lilist,
//   BottomLinks,
// } from "../styles/siteMapStyles";
// import { H2 } from "../styles/mainStyles";

const SiteMap = ({ data }) => {
  const {
    datoCmsSeo,
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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/current-sale">Current Sale</Link>
        </li>
        <li>
          <Link to="/financing">Financing</Link>
        </li>
        <li>
          <Link to="/policies">Terms/Policies</Link>
        </li>
        <li>
          <Link to="/warranty">Warranty Info </Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us </Link>
        </li>
      </ul>

      <div>
        <header>
          <h3>
            <Link to="/brands">Mattresses</Link>
          </h3>
          <div>
            <Link to="/brands/list">Shop All Mattresses</Link>
          </div>
        </header>
        <div>
          <MatttressListSitemap
            mattresses={beautyrestMattress.nodes}
            learnMore
          />
          <MatttressListSitemap mattresses={nectarMattress.nodes} learnMore />
          <MatttressListSitemap mattresses={poshMattress.nodes} learnMore />
          <MatttressListSitemap mattresses={sealyMattress.nodes} learnMore />
          <MatttressListSitemap mattresses={sertaMattress.nodes} />
          <MatttressListSitemap mattresses={stearnsMattress.nodes} learnMore />
          <MatttressListSitemap mattresses={tempurMattress.nodes} learnMore />
        </div>
      </div>

      <div>
        <header>
          <h3>
            <Link to="/accessories">Accessories</Link>
          </h3>
          <div>
            <Link to="/accessories/list">Shop All Accessories</Link>
          </div>
        </header>
        <div>
          <article>
            <header>
              <h4>
                <Link to="/accessories/list?type=sheets">Sheets</Link>
              </h4>
            </header>
            <ul>
              {sheets.nodes.map((sheet) => (
                <li key={sheet.id}>
                  <Link to={`/accessories/${sheet.slug}`}>{sheet.title}</Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Layout>
  );
};

SiteMap.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default SiteMap;

export const allMattressesSiteMap = graphql`
  query sitmap {
    datoCmsSeo(name: { eq: "siteMap" }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    allDatoCmsNewBlog {
      nodes {
        slug
        title
        id
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
