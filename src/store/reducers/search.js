import { handleActions } from "redux-actions";
import { searchProductsSuccess } from "../actions/search";

const initialState = {
    results: []
}

export const searchReducer = handleActions(
    {
        [searchProductsSuccess]: (state, action) => ({
            results: action.payload.results
        })
    },
    initialState
);

