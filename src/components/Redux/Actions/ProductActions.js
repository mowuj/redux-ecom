import { ProductActionType } from "../Constants/ProductActionType";

export const allProducts = (products) => {
    return {
        type: ProductActionType.ALL_PRODUCTS,
        payload: products
    };
};
export const selectedProduct = (product) => {
    return {
        type: ProductActionType.SELECTED_PRODUCT,
        payload: product
    };
};
export const removeProduct = () => {
    return {
        type: ProductActionType.REMOVE_PRODUCT,
        
    };
};