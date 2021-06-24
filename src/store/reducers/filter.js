import { handleActions } from "redux-actions";
import { filterProductSuccess } from "../actions/filter";
const initialState = {
    size: 0,
    data: []
}

export const filterReducer = handleActions({
    [filterProductSuccess]: (state, action) => ({
        size: action.payload.size,
        data: action.payload.skip === 0 ? action.payload.data : [...state.data, ...action.payload.data]
    })
}, initialState)