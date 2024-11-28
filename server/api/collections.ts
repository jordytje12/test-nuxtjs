export default defineEventHandler(async (event) => {
    const storefront = useStorefront();

    // Haal queryparameters op (bijv. ?handle=collection-handle of ?first=3)
    const { handle, first } = getQuery(event);

    // GraphQL-query aanpassen op basis van de aanwezigheid van 'handle'
    let query = `#graphql
    query FetchCollections($first: Int) {
      collections(first: $first) {
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
            products(first: 5) {
              nodes {
                id
                title
                description
                priceRange {
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

    let variables: Record<string, any> = { first: Number(first) || 5 };

    if (handle) {
        query = `#graphql
      query FetchCollection($handle: String!) {
        collection(handle: $handle) {
          id
          title
          description
          handle
          image {
            src
            altText
          }
          products(first: 5) {
            nodes {
              id
              title
              description
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    `;
        variables = { handle };
    }

    return storefront.request(query, { variables });
});
