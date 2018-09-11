export const ACCESS_TOKEN = 'access_token_marketplace_demo';

export const REFRESH_TOKEN = 'refresh_token_marketplace_demo';

export const CART_UID = 'cart_uid_marketplace_demo';

export const LOG_IN = 'LOG_IN';

export const LOG_OUT = 'LOG_OUT';

export const ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const EDIT_CART = 'EDIT_CART';

export const EMPTY_CART = 'EMPTY_CART';

export const ADDED_TO_CART_SNACKBAR = 'Added to Cart';

export const SUCCESSFUL_ORDER = 'Successful order';

export const ANY = 'Any';

export const MORE_THAN_FOUR = 'More than 4';

export const MORE_THAN_THREE = 'More than 3';

export const ONE_TO_THREE = '1 to 3';

export const YES = 'Yes';

export const NO = 'No';

export const RATINGS = 'Ratings';

export const PRICE_HIGH_TO_LOW = 'Price: High to Low';

export const PRICE_LOW_TO_HIGH = 'Price: Low to High';

export const NEW = 'New';

export const ROUTES = {
    root: '/',
    about: '/about',
    auth: {
        login: '/login',
        register: '/register',
        logout: '/logout'
    },
    products: {
        index: '/products',
        search: '/products/:q',
        show: '/product/:id',
        store: '/store/:storeId/products/add',
        update: '/store/:storeId/product/:productId/edit'
    },
    stores: {
        index: '/stores',
        search: '/stores/:q',
        show: '/store/:storeId',
        store: '/store/add',
        update: '/store/:storeId/edit'
    },
    orders: {
        checkout: '/checkout',
        confirmation: '/order',
        index: '/orders',
        show: '/order/:orderId'
    },
    users: {
        show: '/account'
    }
};

export const NOT_FOUND_IMAGE = '/images/notfound.jpg';

export const REPO_URL = 'https://github.com/tompenzer/marketplace-demo';
