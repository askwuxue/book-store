import { handleActions } from "redux-actions";
import { getProductsSuccess } from '../actions/products';

const initialState = {
    sold: [],
    createdAt: []
}

export const productsReducer = handleActions(
    {
        [getProductsSuccess]: (state, action) => ({
            ...state,
            [action.payload.sortBy]: action.payload.products
        })
    },
    initialState
)