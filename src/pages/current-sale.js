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
} from "../components/mattressList/mattList.styles";
import MattressThumb from "../components/mattressList/mattThumbNail";

const CurrentSale = ({ data }) => {
  const { allDatoCmsMattress, datoCmsCurrentSale } = data;
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
          {allDatoCmsMattress.nodes.map(mattress => (
            <MattressThumb
              key={mattress.id}
              mattress={mattress}
              url={`/brands/${mattress.brand.urlName}/${mattress.slug}`}
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

// export const currentSaleQuery = graphql`
//   query currentSaleQuery {
//     datoCmsCurrentSale {
//       title
//       description
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       saleMattresses {
//         ...mattressParts
//       }
//     }
//   }
// `;

export const currentSaleQuery = graphql`
  query currentSaleQuery {
    allDatoCmsMattress(
      filter: {
        meta: { status: { eq: "published" } }
        saleInfo: { elemMatch: { saleBanner: { ne: "" } } }
      }
      sort: { fields: priceLow, order: ASC }
    ) {
      nodes {
        ...mattressParts
      }
    }
    datoCmsCurrentSale {
      title
      description
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
