const indexName = `Products`;
const protector = `{
  protector:  allDatoCmsProduct(filter: {typeOfProduct: {title: {eq: "Protector"}}}) {
    nodes {
      brand {
        title
      }
      slug
      description
      id
      title
      shopifyInfo {
        vendor
      }
    }
  }
}`;
const sheets = `{
  sheets:  allDatoCmsProduct(filter: {typeOfProduct: {title: {eq: "Sheets"}}}) {
    nodes {
      brand {
        title
      }
      slug
      description
      id
      title
      shopifyInfo {
        vendor
      }
    }
  }
}`;
const pillows = `{
  pillow:  allDatoCmsProduct(filter: {typeOfProduct: {title: {eq: "Pillow"}}}) {
    nodes {
      brand {
        title
      }
      slug
      description
      id
      title
      shopifyInfo {
        vendor
      }
    }
  }
}`;
const adjustables = `{
  adjustable: allDatoCmsProduct(filter: {typeOfProduct: {title: {eq: "Adjustable"}}}) {
    nodes {
      brand {
        title
      }
      slug
      id
      title
      description
    }
  }
}
`;
const mattress = `{
  mattresses:  allDatoCmsNewMattress {
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
      name
    }
  }
}
`;

function protectorToAlgoliaRecord({ id, slug, title, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/accessories/${slug}`,
    title,
    productType: "protectors",
    brand: brand.title,
    ...rest,
  };
}

function sheetsToAlgoliaRecord({ id, slug, title, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/accessories/${slug}`,
    title,
    productType: "sheets",
    brand: brand.title,
    ...rest,
  };
}

function pillowToAlgoliaRecord({ id, slug, title, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/accessories/${slug}`,
    title,
    productType: "pillows",
    brand: brand.title,
    ...rest,
  };
}
function adjustableToAlgoliaRecord({ id, slug, title, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/adjustable/${slug}`,
    title,
    productType: "adjustable base",
    brand: brand.title,
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
