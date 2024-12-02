export const productQuery = `
  query getProduct($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      description
      images(first: 1) {
        nodes {
          url
          altText
        }
      }
      priceRange {
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;
