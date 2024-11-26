// ~/server/api/products.ts

export default defineEventHandler(async () => {
    const storefront = useStorefront()

    const query = `#graphql
        query FetchProducts($first: Int) {
  products(first: $first) {
    nodes {
      id
      title
      description
      handle
      priceRange{
        minVariantPrice{
          amount
          currencyCode
        }
      }
      images(first: 1){
        edges{
          node{
            url
            altText        
          }
        }
      }
    }
  }
}

    `

    return storefront.request(query, {
        variables: {
            first: 5,
        },
    })
})