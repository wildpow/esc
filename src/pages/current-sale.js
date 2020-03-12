import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Layout from "../components/layout";
// import CurrentSale from "../components/mattressList/currentSale";
// import CurrentSale from "../components/mattressList/currentSale/newCurrentSale";
import MattListCurrentSale from "../components/mattressList/currentSale/WIP";
// import {
//   MainWrapper,
//   Wrapper,
//   P,
//   Wrapper2,
//   Headline,
// } from "../components/mattressList/mattList.styles";
// import MattressThumb from "../components/mattressList/mattThumbNail";

const Sale = ({ data }) => {
  const { allDatoCmsMattress, datoCmsCurrentSale } = data;
  return (
    <Layout>
      <HelmetDatoCms seo={datoCmsCurrentSale.seoMetaTags} />
      {/* <MainWrapper>
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
      </MainWrapper> */}
      <MattListCurrentSale
        mattresses={allDatoCmsMattress.nodes}
        title={datoCmsCurrentSale.title}
        description={datoCmsCurrentSale.description}
      />
    </Layout>
  );
};

Sale.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
export default Sale;

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
