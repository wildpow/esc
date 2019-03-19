import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import {
  MainWrapper,
  Wrapper,
  P,
  Wrapper2,
  Headline,
} from "../styles/mattListStyles";
import SingleMattress from "../components/singleMattress/singleMattress";

const CurrentSale = ({ data }) => {
  const { allIsOnSales } = data.gcms;
  return (
    <Layout>
      <Helmet>
        <title>{`ESC: ${allIsOnSales[0].tabTitle}`}</title>
        <meta name="description" content={allIsOnSales[0].description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="E.S.C. Mattress Center" />
        <meta
          property="og:url"
          content="https://www.escmattresscenter.com/current-sale"
        />
        <meta
          property="og:image"
          content={`https://media.graphcms.com/resize=w:980,h:450,fit:clip/${
            allIsOnSales[0].currentSaleImg.handle
          }`}
        />
        <meta property="og:image:width" content="980" />
        <meta property="og:image:height" content="450" />
        <meta
          property="og:image:alt"
          content={`E.S.C Mattress Center | ${allIsOnSales[0].saleName}`}
        />
        <meta property="og:title" content="E.S.C. Mattress Center" />
        <meta property="og:description" content={allIsOnSales[0].description} />
      </Helmet>
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
