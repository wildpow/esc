/* eslint-disable react/prop-types */
import React, { useState, useEffect, useReducer } from "react";
import { graphql, Link } from "gatsby";
// import styled from "styled-components";
// import AccList from "../../components/accessoriessList";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/breadCrumbs";
import Header from "../../components/mattressList/Header";
import { NewBread, MattListWrapper } from "../../components/mattressList";
import accData from "../../components/accessoriessList/data";
import filterSortAcc from "../../components/accessoriessList/filterSortAcc";

const AccessoriessList = ({
  data: { pillows, sheets, protector },
  location,
}) => {
  const initalState = {
    acc: [],
    accBeforeFilter: [],
    accInfo: {},
    vendor: [],
    type: [],
    tags: [],
    sheets,
    pillows,
    protector,
    all: [...sheets.nodes, ...protector.nodes, ...pillows.nodes],
  };
  // const [state, setState] = useState();
  // const [info, setInfo] = useState({
  //   title: "",
  //   description: "",
  //   bg: "",
  // });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get("type");
    if (type === null) {
      setInfo(accData[3]);
      window.history.replaceState({}, "", `${location.pathname}?type=all`);
      setState([...sheets.nodes, ...protector.nodes, ...sheets.nodes]);
    } else if (type.toLowerCase() === "sheets") {
      setState(sheets.nodes);
      setInfo(accData[0]);
    } else if (type.toLowerCase() === "pillows") {
      setState(pillows.nodes);
      setInfo(accData[1]);
    } else if (type === "protector") {
      setInfo(accData[2]);
      setState(protector.nodes);
      setInfo("Protector");
    } else {
      setInfo(accData[3]);
      window.history.replaceState({}, "", `${location.pathname}?type=all`);
      setState([...sheets.nodes, ...protector.nodes, ...sheets.nodes]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [state, dispatch] = useReducer(filterSortAcc, initalState);
  return (
    <Layout>
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs next="Accessories" here={info.title} />
        </NewBread>
        <Header
          title={info.title === "All" ? "Perfect Sleep System" : info.title}
          description={info.description}
          headerBG={info.bg}
        />
        <div className="mattList__flex">
          <div>sort</div>
          <div className="mattList__grid">
            {console.log(info)}
            {state.map(stuff => (
              <div key={stuff.title}>{stuff.title}</div>
            ))}
          </div>
        </div>
        <NewBread Brands Bottom>
          <BreadCrumbs next="Accessories" here={info.title} />
        </NewBread>
      </MattListWrapper>
    </Layout>
  );
};

export const accessoryList = graphql`
  query accList {
    protector: allShopifyProduct(
      filter: { productType: { eq: "Protector" } }
      sort: { fields: priceRange___minVariantPrice___amount }
    ) {
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
    sheets: allShopifyProduct(
      filter: { productType: { eq: "Sheets" } }
      sort: { fields: priceRange___minVariantPrice___amount }
    ) {
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
    pillows: allShopifyProduct(
      filter: { productType: { eq: "Pillow" } }
      sort: { fields: priceRange___minVariantPrice___amount }
    ) {
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
