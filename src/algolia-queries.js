const indexName = `Products`;

const chairs = `{
 chairs:  allDatoCmsXChair {
    nodes {
      title
      searchDetails
      slug
      id
      typeOfProduct {
        title
      }
    }
  }
}`;
const products = `{
  products: allDatoCmsProduct {
    nodes {
      typeOfProduct {
        title
      }
      brand {
        title
      }
      slug
      description
      id
      title
    }
  }
}`;

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

function productToAlgoliaRecord({
  id,
  slug,
  title,
  brand,
  typeOfProduct,
  ...rest
}) {
  const fullSlug =
    typeOfProduct.title === "Adjustable"
      ? `/adjustable/${slug}`
      : `/accessories/${slug}`;
  return {
    objectID: id,
    slug: fullSlug,
    title,
    productType: typeOfProduct.title,
    brand: brand.title,
    ...rest,
  };
}
function xChairtoAlgoliaRecord({
  id,
  title,
  searchDetails,
  slug,
  typeOfProduct,
  ...rest
}) {
  return {
    objectID: id,
    slug: `/x-chair/${slug}`,
    title: `X-Chair ${slug.toUpperCase()} ${title}`,
    productType: typeOfProduct.title,
    brand: "X-Chair",
    description: searchDetails,
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
      searchableAttributes: ["title", `productType`, `brand`, `description`],
    },
  },
  {
    query: products,
    transformer: ({ data }) => data.products.nodes.map(productToAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: ["title", `productType`, `brand`, `description`],
    },
  },
  {
    query: chairs,
    transformer: ({ data }) => data.chairs.nodes.map(xChairtoAlgoliaRecord),
    indexName,
    settings: {
      attributesToSnippet: [`description:20`],
      searchableAttributes: ["title", `productType`, `brand`, `description`],
    },
  },
];
module.exports = queries;
