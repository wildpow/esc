const indexName = `Pages`;
const adjustables = `{
  adjustable: allDatoCmsAdjustableBase {
      nodes {
        brand
        slug
        fullName
        id
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
    fullName,
    ...rest,
  };
}
function pageToAlgoliaRecord({ id, slug, name, ...rest }) {
  return {
    objectID: id,
    slug: `/brands/${rest.brand.urlName}/${slug}`,
    name,
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
