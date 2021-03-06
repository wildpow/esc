import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/Layout";
// import {
//   MatttressListSitemap,
//   ProductListSitemap,
//   OtherListSitemap,
// } from "../components/Sitemap/MattressListSiteMap";
import { radius, colors, spacing, fonts, boxShadow } from "../utils/styles";
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
import MattressStuff from "../components/Sitemap/MattressStuff";
import ProductStuff from "../components/Sitemap/ProductStuff";

const SitemapRoot = styled.div`
  padding: 40px 10px;
  font-family: ${fonts.sans};
  display: flex;
  flex-direction: column;
  .quickLinks {
    position: relative;
    padding: ${spacing[1]};
    padding-top: ${spacing[4]};
    margin-bottom: ${spacing[4]};
    border-radius: ${radius.large};
    border: 1px solid ${colors.gray["500"]};
    background-color: white;
    h3 {
      position: absolute;
      left: 20px;
      background: white;
      padding: 5px 20px;
      background: ${colors.blue[900]};
      color: white;
      border: 1px solid ${colors.gray["400"]};
      top: -14px;
      z-index: 1;
      margin: 0;
    }
    ul {
      display: flex;

      flex-wrap: wrap;
      padding-right: 20px;
      padding-left: 20px;
    }
    li {
      list-style: none;
      padding-right: 15px;
      padding-bottom: 10px;
    }
  }
`;

const HeaderRoot = styled.div`
  --border-width: 3px;
  --border-color: ${colors.gray[700]};
  position: relative;

  .second {
    padding-left: 20px;
  }

  .wrapper {
    border-left: var(--border-width) solid var(--border-color);
    margin-left: 0px;
    padding-top: 25px;
    ul {
      position: relative;
      list-style: none;
      margin-left: 20px;
      border-left: var(--border-width) solid var(--border-color);
      padding-left: 25px;
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-bottom: 0;
      :before {
        content: "";
        position: absolute;
        width: var(--border-width);
        height: 35px;
        background-color: var(--border-color);
        left: -3px;
        top: -30px;
      }
      :after {
        content: "";
        position: absolute;
        width: 6px;
        height: 41px;
        background-color: #f7fafc;
        left: -4px;
        bottom: -5px;
      }
      li {
        text-align: center;
        position: relative;
        padding: 7px 5px;
        margin-bottom: 20px;
        box-shadow: ${boxShadow.md};
        background-color: white;
        border: var(--border-width) solid var(--border-color);
        :before {
          content: "";
          position: absolute;
          width: 25px;
          height: var(--border-width);
          background-color: var(--border-color);
          left: -28px;
          top: 50%;
        }
        a {
          color: ${colors.blue[700]};
          text-decoration: none;
        }
      }
    }
  }

  .top {
    width: 100%;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    /* left: 20px; */
    /* background: white; */
    color: white;
    /* top: -14px; */
    z-index: 1;
    margin: 0;
    .first {
      position: relative;

      :after {
        position: absolute;
        content: "";
        bottom: 50%;
        left: -25px;
        width: 25px;
        background-color: var(--border-color);
        height: var(--border-width);
      }
    }
    a {
      box-shadow: ${boxShadow.md};

      /* width: 47%; */
      padding: 7px 10px;
      border: var(--border-width) solid var(--border-color);
      background: ${colors.gray[300]};
      /* background: white; */
      text-decoration: none;
      color: ${colors.blue[700]};
      justify-self: center;
      align-self: center;
      text-align: center;
      /* font-size: 0.9rem; */
      @media (min-width: 568px) {
        padding: 15px 25px;
      }
    }
  }
  .divider {
    align-self: center;
    height: var(--border-width);
    width: 25px;
    background-color: var(--border-color);
  }

  .lastWrapper {
    border-left: none;
    position: relative;
    padding-left: 5px;
    :before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 3px;
      height: 44px;
      background-color: var(--border-color);
    }
  }

  @media screen and (min-width: 568px) {
    .lastWrapper {
      :before {
        height: 52px;
      }
    }
    .wrapper {
      margin-left: 65px;
      ul {
        margin-left: 88px;
        :after {
          bottom: -2px;
        }
        li {
          padding: 10px 10px;
        }
      }
    }
  }
`;

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
      <SitemapRoot>
        <div className="quickLinks">
          <h3>Quick Links</h3>
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
        </div>
        <div style={{ display: "flex" }}>
          <HeaderRoot>
            <header className="top">
              <Link to="/brands">Mattresses</Link>
              <div className="divider" />
              <Link to="/brands/list">Shop All Mattresses</Link>
            </header>
            <div className="wrapper">
              <MattressStuff mattresses={beautyrestMattress.nodes} learnMore />
            </div>
            <div className="wrapper">
              <MattressStuff mattresses={nectarMattress.nodes} learnMore />
            </div>
            <div className="wrapper">
              <MattressStuff mattresses={poshMattress.nodes} learnMore />
            </div>
            <div className="wrapper">
              <MattressStuff mattresses={sealyMattress.nodes} learnMore />
            </div>
            <div className="wrapper">
              <MattressStuff mattresses={sertaMattress.nodes} />
            </div>
            <div className="wrapper">
              <MattressStuff mattresses={stearnsMattress.nodes} learnMore />
            </div>
            <div className="wrapper lastWrapper">
              <MattressStuff mattresses={tempurMattress.nodes} learnMore />
            </div>
          </HeaderRoot>
          <HeaderRoot>
            <header className="top">
              <Link to="/accessories">Accessories</Link>
              <div className="divider" />
              <Link to="/accessories/list">Shop All Accessories</Link>
            </header>
            <div className="wrapper">
              <ProductStuff
                products={foundations.nodes}
                productUrl="list?type=foundation"
                productTitle="Foundations"
              />
            </div>
            <div className="wrapper">
              <ProductStuff
                products={protectors.nodes}
                productUrl="list?type=protector"
                productTitle="Protectors"
              />
            </div>
            <div className="wrapper">
              <ProductStuff
                products={sheets.nodes}
                productUrl="list?type=sheets"
                productTitle="Sheets"
              />
            </div>
            <div className="wrapper lastWrapper">
              <ProductStuff
                products={pillows.nodes}
                productUrl="list?type=pillow"
                productTitle="Pillows"
              />
            </div>
          </HeaderRoot>
        </div>
      </SitemapRoot>
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
