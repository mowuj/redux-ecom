import { type } from "@testing-library/user-event/dist/type"
import { ProductActionType } from "../Constants/ProductActionType"

const initialState = {
    productList: [{
        id: 111,
        title:"Laptop",
        price: 30000,
        description: "A new Product at best price",
        category:"Electronics"
    }]
}
export const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case ProductActionType.ALL_PRODUCTS:
            return {
                ...state
            };
        default:
            return state;
    }
}