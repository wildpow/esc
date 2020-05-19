/* eslint-disable prefer-destructuring */
/* eslint-disable react/prop-types */
import React, { useReducer } from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import BreadCrumbs from "../../components/breadCrumbs";
import Header from "../../components/mattressList/Header";
import { NewBread, MattListWrapper } from "../../components/mattressList";
import accData from "../../components/accessoriessList/data";
import filterSortAcc from "../../components/accessoriessList/filterSortAcc";
import FilterSortPanel from "../../components/accessoriessList/filterSortPanelAcc";
import AccThumb from "../../components/accessoriessList/accThumb";

const AccessoriessList = ({
  data: { pillows, sheets, protector },
  location,
}) => {
  const initalState = {
    acc: [],
    accInfo: accData,
    selectedAccInfo: {},
    typeCheckBoxs: [],
    selectedTypes: [],
    accBeforeFilter: [...sheets.nodes, ...protector.nodes, ...pillows.nodes],
    locationPath: location.pathname,
  };

  const params = new URLSearchParams(location.search);
  const type = params.get("type");
  if (type === null) {
    initalState.selectedAccInfo = initalState.accInfo[3];
    initalState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    window.history.replaceState({}, "", `${location.pathname}`);
    initalState.acc = initalState.accBeforeFilter;
  } else if (type.toLowerCase() === "sheets") {
    initalState.selectedAccInfo = initalState.accInfo[0];
    initalState.typeCheckBoxs = [
      { value: "Sheets", checked: true, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    initalState.acc = [...sheets.nodes];
    initalState.selectedTypes.push("Sheets");
  } else if (type.toLowerCase() === "pillow") {
    initalState.selectedAccInfo = initalState.accInfo[1];
    initalState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: true, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    initalState.acc = [...pillows.nodes];
    initalState.selectedTypes.push("Pillow");
  } else if (type.toLowerCase() === "protector") {
    initalState.selectedAccInfo = initalState.accInfo[2];
    initalState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: true, displayName: "Protectors" },
    ];
    initalState.acc = [...protector.nodes];
    initalState.selectedTypes.push("Protector");
  } else {
    initalState.selectedAccInfo = initalState.accInfo[3];
    initalState.typeCheckBoxs = [
      { value: "Sheets", checked: false, displayName: "Sheets" },
      { value: "Pillow", checked: false, displayName: "Pillows" },
      { value: "Protector", checked: false, displayName: "Protectors" },
    ];
    window.history.replaceState({}, "", `${location.pathname}`);
    initalState.acc = initalState.accBeforeFilter;
  }
  const [state, dispatch] = useReducer(filterSortAcc, initalState);
  return (
    <Layout>
      <MattListWrapper>
        <NewBread Brands>
          <BreadCrumbs next="Accessories" here={state.selectedAccInfo.title} />
        </NewBread>
        <Header
          title={state.selectedAccInfo.title}
          description={state.selectedAccInfo.description}
          headerBG={state.selectedAccInfo.bg}
        />
        <div className="mattList__flex">
          <FilterSortPanel
            dispatch={dispatch}
            typeCheckBoxs={state.typeCheckBoxs}
          />
          <div className="mattList__grid">
            {state.acc.map(stuff => (
              <AccThumb stuff={stuff} key={stuff.shopifyId} />
            ))}
          </div>
        </div>
        {console.log(state)}
        <NewBread Brands Bottom>
          <BreadCrumbs next="Accessories" here={state.selectedAccInfo.title} />
        </NewBread>
      </MattListWrapper>
    </Layout>
  );
};

export const accessoryList = graphql`
  query accList {
    protector: allShopifyProduct(
      filter: { productType: { eq: "Protector" } }
      sort: { fields: priceRange___minVariantPrice___amount, order: DESC }
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
      sort: { fields: priceRange___minVariantPrice___amount, order: DESC }
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
      sort: { fields: priceRange___minVariantPrice___amount, order: DESC }
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
