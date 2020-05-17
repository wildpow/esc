import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import styled from "styled-components";
// import AccList from "../../components/accessoriessList";
import Layout from "../../components/layout";
import BreadCrumbs, { BreadWrapper } from "../../components/breadCrumbs";

const NewBread = styled(BreadWrapper)`
  padding: 0;
  margin-left: 0;
  margin-right: 0;
  @media (min-width: 568px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 768px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1022px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media (min-width: 1300px) {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
  }
`;

const MattListWrapper = styled.div`
  display: flex;
  padding-left: 5px;
  padding-right: 5px;
  flex-direction: column;
  .mattList__flex {
    border-top: 8px solid ${props => props.theme.mainColor1};
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .mattList__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(265px, 1fr));
    grid-auto-rows: minmax(300px, auto);
    grid-gap: 1rem;
    margin-left: 7px;
    margin-right: 7px;
    @media screen and (min-width: 768px) {
      margin: 0;
      width: 80%;
    }
  }
`;
const AccessoriessList = ({
  data: { pillows, sheets, protector },
  location,
}) => {
  const [state, setState] = useState();
  const [title, setTitle] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    console.log(params, type);
    if (type === null) {
      setTitle("All");
      setState([...sheets.nodes, ...protector.nodes, ...sheets.nodes]);
    } else if (type.toLowerCase() === "sheets") {
      setState(sheets);
      setTitle("Sheets");
    } else if (type.toLowerCase() === "pillows") {
      setState(pillows);
      setTitle("Pillows");
    } else if (type === "protector") {
      setState(protector);
      setTitle("Protector");
    } else {
      setTitle("All");
      setState([...sheets.nodes, ...protector.nodes, ...sheets.nodes]);
    }
  }, [location.search, pillows, protector, sheets]);
  return (
    <Layout>
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs next="Accessories" here={title} />
        </NewBread>
        <div className="mattList__flex">
          <div>sort</div>
          <div className="mattList__grid">
            <h1>accs</h1>
          </div>
        </div>
        <NewBread Brands Bottom>
          <BreadCrumbs next="Accessories" here={title} />
        </NewBread>
      </MattListWrapper>
      <h1>{title}</h1>
    </Layout>
  );
};

export const accessoryList = graphql`
  query accList {
    protector: allShopifyProduct(filter: { productType: { eq: "Protector" } }) {
      nodes {
        title
        shopifyId
        productType
        tags
        vendor
        availableForSale
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        variants {
          shopifyId
          price
          title
          compareAtPrice
        }
        description
        title
        images {
          originalSrc
        }
        priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
      }
    }
    sheets: allShopifyProduct(filter: { productType: { eq: "Sheets" } }) {
      nodes {
        title
        shopifyId
        productType
        tags
        vendor
        availableForSale
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        variants {
          shopifyId
          price
          title
          compareAtPrice
        }
        description
        title
        images {
          originalSrc
        }
        priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
      }
    }
    pillows: allShopifyProduct(filter: { productType: { eq: "Pillow" } }) {
      nodes {
        title
        shopifyId
        productType
        tags
        vendor
        availableForSale
        priceRange {
          minVariantPrice {
            amount
          }
          maxVariantPrice {
            amount
          }
        }
        variants {
          shopifyId
          price
          title
          compareAtPrice
        }
        description
        title
        images {
          originalSrc
        }
        priceRange {
          minVariantPrice {
            currencyCode
            amount
          }
          maxVariantPrice {
            currencyCode
            amount
          }
        }
      }
    }
  }
`;

export default AccessoriessList;
