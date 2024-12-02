import { createStorefrontApiClient } from '@shopify/storefront-api-client';

export const client = createStorefrontApiClient({
    storeDomain: 'https://sjehpf-ax.myshopify.com/',
    apiVersion: '2024-10',
    publicAccessToken: '6d19ff718ae3e9e780f7c38e1218fd9b',
});
