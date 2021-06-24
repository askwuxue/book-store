import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { filterProduct, filterProductSuccess } from "../actions/filter";

function* handleFilterProduct(action) {
    let response = yield axios.post(`${API}/products/filter`, action.payload);
    yield put(filterProductSuccess({ skip: action.payload.skip, ...response.data }));
}


export default function* filterSaga() {
    yield takeEvery(filterProduct, handleFilterProduct)
}