import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";

const AccessoriessList = props => {
  const [state, setState] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const type = params.get("type").toLowerCase();
    if (type === "sheets") {
      setState("Sheets");
    } else if (type === "pillows") {
      setState("Pillows");
    } else {
      setState("ALL");
    }
  }, [props.location.search]);
  return (
    <div>
      <h1>{state}</h1>
    </div>
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
