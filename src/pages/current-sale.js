import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import {
  MainWrapper,
  Wrapper,
  P,
  Wrapper2,
  Headline,
} from "../styles/mattListStyles";
import SingleMattress from "../components/singleMattress/singleMattress";
import SEO from "../components/seo";

const CurrentSale = ({ data }) => {
  const { allIsOnSales } = data.gcms;
  return (
    <Layout>
      <SEO
        title={`ESC: ${allIsOnSales[0].tabTitle}`}
        description={allIsOnSales[0].description}
        ogTitle={`E.S.C. Mattress Center | ${allIsOnSales[0].saleName}`}
        ogImageAlt={`E.S.C Mattress Center | ${allIsOnSales[0].saleName}`}
        ogImage={`https://media.graphcms.com/resize=w:980,h:450,fit:clip/${
          allIsOnSales[0].currentSaleImg.handle
        }`}
        ogImageHeight="450"
        ogImageWidth="980"
      />
      <MainWrapper>
        <Wrapper2>
          <Headline>{allIsOnSales[0].saleName}</Headline>
          <P>{allIsOnSales[0].description}</P>
          <Headline red>“Sleep Like the Experts Do!”</Headline>
        </Wrapper2>
        <Wrapper>
          {allIsOnSales[0].mattresses.map(mattress => (
            <SingleMattress
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.uriBrandName}/${mattress.uri}`}
            />
          ))}
        </Wrapper>
      </MainWrapper>
    </Layout>
  );
};

CurrentSale.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default CurrentSale;

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    gcms {
      allIsOnSales {
        id
        description
        tabTitle
        saleName
        currentSaleImg {
          handle
        }
        mattresses(filter: { isPublished: true }, orderBy: orderByPrice_ASC) {
          id
          uriBrandName
          brandName
          orderByPrice
          uri
          subName
          subBrand
          priceRange
          coverImg {
            handle
          }
        }
      }
    }
  }
`;
