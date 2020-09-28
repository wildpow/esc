const indexName = `Products`;
const protector = `{
  protector: allShopifyProduct(filter: { productType: { eq: "Protector" } }) {
    nodes {
      handle
      description
      vendor
      shopifyId
      title
    }
  }
}`;
const sheets = `{
  sheets: allShopifyProduct(filter: { productType: { eq: "Sheets" } }) {
    nodes {
      handle
      description
      vendor
      shopifyId
      title
    }
  }
}`;
const pillows = `{
  pillow: allShopifyProduct(filter: { productType: { eq: "Pillow" } }) {
    nodes {
      handle
      description
      vendor
      shopifyId
      title
    }
  }
}`;
const adjustables = `{
  adjustable: allDatoCmsAdjustableBase {
      nodes {
        brand
        slug
        fullName
        id
        description
      }
    }
  }
`;
const mattress = `{
  mattresses: allDatoCmsMattress {
      nodes {
        slug
        name
        id
        description
        brand {
          displayName
          urlName
        }
        subline {
          name
        }
      }
    }
  }
`;

function protectorToAlgoliaRecord({
  shopifyId,
  handle,
  title,
  vendor,
  ...rest
}) {
  return {
    objectID: shopifyId,
    slug: `/accessories/${handle}`,
    title,
    productType: "protectors",
    brand: vendor,
    ...rest,
  };
}

function sheetsToAlgoliaRecord({ shopifyId, handle, title, vendor, ...rest }) {
  return {
    objectID: shopifyId,
    slug: `/accessories/${handle}`,
    title,
    productType: "sheets",
    brand: vendor,
    ...rest,
  };
}

function pillowToAlgoliaRecord({ shopifyId, handle, title, vendor, ...rest }) {
  return {
    objectID: shopifyId,
    slug: `/accessories/${handle}`,
    title,
    productType: "pillows",
    brand: vendor,
    ...rest,
  };
}
function adjustableToAlgoliaRecord({ id, slug, fullName, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/adjustable/${slug}`,
    title: fullName,
    productType: "adjustable base",
    brand,
    ...rest,
  };
}
function mattressesToAlgoliaRecord({
  id,
  slug,
  name,
  brand,
  subline,
  ...rest
}) {
  return {
    objectID: id,
    slug: `/brands/${brand.urlName}/${slug}`,
    title: name,
    productType: "mattresses",
    brand: brand.displayName,
    subline: subline.name,
    ...rest,
  };
}
const queries = [
  {
    query: mattress,
    transformer: ({ data }) =>
      data.mattresses.nodes.map(mattressesToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: [`brand`, `description`, `productType`, "title"],
    },
  },
  {
    query: adjustables,
    transformer: ({ data }) =>
      data.adjustable.nodes.map(adjustableToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: [`brand`, `description`, `productType`, "title"],
    },
  },
  {
    query: pillows,
    transformer: ({ data }) => data.pillow.nodes.map(pillowToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: [`brand`, `description`, `productType`, "title"],
    },
  },
  {
    query: sheets,
    transformer: ({ data }) => data.sheets.nodes.map(sheetsToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: [`brand`, `description`, `productType`, "title"],
    },
  },
  {
    query: protector,
    transformer: ({ data }) =>
      data.protector.nodes.map(protectorToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: [`brand`, `description`, `productType`, "title"],
    },
  },
];
module.exports = queries;
