import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
import {
  MainWrapper,
  Wrapper,
  P,
  Wrapper2,
  Headline,
} from "../styles/mattListStyles";
import MattressThumb from "../components/mattThumbNail/mattThumb";

const CurrentSale = ({ data }) => {
  const { datoCmsCurrentSale } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsCurrentSale.seoMetaTags} />
      <MainWrapper>
        <Wrapper2>
          <Headline>{datoCmsCurrentSale.title}</Headline>
          <P>{datoCmsCurrentSale.description}</P>
          <Headline red>“Sleep Like the Experts Do!”</Headline>
        </Wrapper2>
        <Wrapper>
          {datoCmsCurrentSale.saleMattresses.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.uri}`}
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
    datoCmsCurrentSale {
      title
      description
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      saleMattresses {
        ...mattressParts
      }
    }
  }
`;
