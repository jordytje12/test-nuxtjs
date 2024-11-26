export interface Product {
    id: string;
    title: string;
    description: string;
    handle: string;
    priceRange: {
        minVariantPrice: {
            amount: string;
            currencyCode: string;
        };
        maxVariantPrice?: {
            amount: string;
            currencyCode: string;
        };
    };
    images: {
        edges: {
            node: {
                url: string;
                altText: string | null;
            };
        }[];
    };
}

export interface ShopifyResponse {
    data: {
        products: {
            nodes: Product[];
        };
    };
}

export interface ShopifyProductResponse {
    data: {
        product: {
            id: string;
            title: string;
            description: string;
            priceRange: {
                minVariantPrice: {
                    amount: string;
                    currencyCode: string;
                };
            };
            images: {
                edges: {
                    node: {
                        url: string;
                        altText: string | null;
                    };
                }[];
            };
        };
    };
}
