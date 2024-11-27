export default defineEventHandler(async (event) => {
    const storefront = useStorefront();

    // Haal queryparameters op (bijv. ?handle=product-handle)
    const { handle, first } = getQuery(event);

    // GraphQL-query aanpassen op basis van de aanwezigheid van 'handle'
    let query = `#graphql
        query FetchProducts($first: Int) {
            products(first: $first) {
                nodes {
                    id
                    title
                    description
                    handle
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images(first: 1) {
                        edges {
                            node {
                                url
                                altText        
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
            query FetchProduct($handle: String!) {
                product(handle: $handle) {
                    id
                    title
                    description
                    handle
                    priceRange {
                        minVariantPrice {
                            amount
                            currencyCode
                        }
                    }
                    images(first: 5) {
                        edges {
                            node {
                                url
                                altText
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
