export const collectionsQuery = `
query GetCollections {
  collections(first: 5) {
    edges {
      node {
        id
        title
        description
        handle
        image {
          src
          altText
        }
      }
    }
  }
}

`;
