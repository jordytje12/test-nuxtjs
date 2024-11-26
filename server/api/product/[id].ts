import type { ShopifyProductResponse } from '@/types/shopify';

export default defineEventHandler(async (event) => {
    const storefront = useStorefront();

    // Haal het product-ID op
    const productId = event.context.params?.id;
    if (!productId) {
        throw createError({
            statusCode: 400,
            statusMessage: 'Product ID is required',
        });
    }

    // Converteer numeriek ID naar Shopify globale ID
    const globalId = `gid://shopify/Product/${productId}`;

    const query = `#graphql
    query FetchProduct($id: ID!) {
      product(id: $id) {
        id
        title
        description
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  `;

    try {
        // Typ de respons als ShopifyProductResponse
        const response = await storefront.request<ShopifyProductResponse>(query, {
            variables: { id: globalId },
        });

        return response.product;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to fetch product',
        });
    }
});
