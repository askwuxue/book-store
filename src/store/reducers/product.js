import { handleActions } from "redux-actions";
import { getProductSuccess } from '../actions/products';

const initialState = {
    sold: [],
    createdAt: []
}

export const productReducer = handleActions(
    {
        [getProductSuccess]: (state, action) => ({
            ...state,
            [action.payload.sortBy]: action.payload.product
        })
    },
    initialState
)