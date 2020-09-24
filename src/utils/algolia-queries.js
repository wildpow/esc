const indexName = `Products`;
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

function adjustableToAlgoliaRecord({ id, slug, fullName, brand, ...rest }) {
  return {
    objectID: id,
    slug: `/adjustable/${slug}`,
    title: fullName,
    brand,
    ...rest,
  };
}
function pageToAlgoliaRecord({ id, slug, name, brand, subline, ...rest }) {
  return {
    objectID: id,
    slug: `/brands/${brand.urlName}/${slug}`,
    title: name,
    brand: brand.displayName,
    subline: subline.name,
    ...rest,
  };
}
const queries = [
  {
    query: mattress,
    transformer: ({ data }) => data.mattresses.nodes.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
  {
    query: adjustables,
    transformer: ({ data }) =>
      data.adjustable.nodes.map(adjustableToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
];
module.exports = queries;
