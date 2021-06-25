import { handleActions } from "redux-actions";
import { getProductSuccess } from "../actions/product";
const initialState = {}

export const productReducer = handleActions({
    [getProductSuccess]: (state, action) => (
        action.payload
    )
}, initialState)