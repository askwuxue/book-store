import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { searchProducts, searchProductsSuccess } from "../actions/search";

function* handleSearch(action) {
    const response = yield axios.get(`${API}/products/search`, {
        params: action.payload
    });
    yield put(searchProductsSuccess({ results: response.data }))
}

export default function* searchSaga() {
    yield takeEvery(searchProducts, handleSearch)
}