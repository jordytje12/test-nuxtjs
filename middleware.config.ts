// middleware.config.js
module.exports = {
    integrations: {
        shopify: {
            location: '@vue-storefront/shopify-api/server',
            configuration: {
                api: {
                    domain: 'sjehpf-ax.myshopify.com/',
                    storefrontAccessToken: '6d19ff718ae3e9e780f7c38e1218fd9b'
                },
                cms: {
                    blogs: '/blogs',
                    articles: '/articles'
                },
                currency: 'USD',
                country: 'US'
            }
        }
    }
};