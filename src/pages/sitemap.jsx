import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import styled from "@emotion/styled";
import Layout from "../components/Layout";
import H2 from "../old/oldHeading.styled";
import {
  boxShadow,
  colors,
  FadeInAnimation,
  fonts,
} from "../styles/theme.styled";

const MattLinksWrapper = styled.div`
  display: flex;
  ${FadeInAnimation}
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;

  @media (min-width: 1300px) {
    margin-left: 50px;
    margin-right: 50px;
  }
`;

const Main = styled.div`
  box-shadow: ${boxShadow.md};
  background-color: white;
  margin-bottom: 20px;
  ul {
    padding-right: 20px;
    padding-left: 20px;
    list-style: none;
    line-height: 1.9rem;
  }
  li {
    font-family: ${fonts.sans};
    font-weight: 400;
  }
  h3 {
    font-family: ${fonts.sans};
    background-color: ${colors.brandBlue};
    margin: 0;
    color: ${colors.gray["100"]};
    padding-top: 15px;
    padding-bottom: 15px;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    text-align: center;
  }
`;
const BrandLinks = styled(Link)`
  color: ${colors.gray["100"]};
  &:hover {
    color: ${colors.gray["400"]};
  }
`;
const SiteLinks = styled(Link)`
  color: #1565c0;
  &:hover {
    color: #eb1c24;
  }
`;

const MainLinks = styled.div`
  display: flex;
  flex-direction: column;
  ${FadeInAnimation}
  border: 1px solid #eee;
  box-shadow: ${boxShadow.md};
  margin-top: 15px;
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

const Lilist = styled.li`
  font-family: ${fonts.sans};
  font-size: 1rem;
  letter-spacing: 0.1rem;
  padding-left: 10px;
  padding-right: 10px;
  @media (min-width: 412px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (min-width: 768px) {
    font-size: 1.3rem;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const UnList = styled.ul`
  list-style: none;
  line-height: 1.8rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0;
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (min-width: 1300px) {
    margin-left: 85px;
    margin-right: 85px;
  }
`;

const SiteMap = ({ data }) => {
  const { allDatoCmsNewMattress, datoCmsSeo, adjustables, allDatoCmsNewBlog } =
    data;
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
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "sealy") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/sealy/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "tempurpedic") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/tempurpedic/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
            <BrandLinks to="/brands/posh-and-lavish">Posh + Lavish</BrandLinks>
          </h3>
          <ul>
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "posh-and-lavish") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/posh-and-lavish/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
            <BrandLinks to="/brands/nectar">Nectar</BrandLinks>
          </h3>
          <ul>
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "nectar") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/nectar/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "stearns") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/stearns/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
            <BrandLinks to="/brands/beautyrest">Beautyrest</BrandLinks>
          </h3>
          <ul>
            {allDatoCmsNewMattress.nodes.map((mattress) => {
              if (mattress.brand.urlName === "beautyrest") {
                return (
                  <li key={mattress.id}>
                    <SiteLinks to={`/brands/beautyrest/${mattress.slug}`}>
                      {`${mattress.subline.name} ${mattress.nameWithout}`}
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
    allDatoCmsNewMattress {
      nodes {
        slug
        shopifyInfo {
          priceRange: priceRangeV2 {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
        }
        name
        id
        nameWithout
        subline {
          name
        }
        brand {
          urlName
          displayName
        }
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
    allDatoCmsNewBlog {
      nodes {
        slug
        title
        id
      }
    }
  }
`;
