import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { API } from "../../config";
import { getProduct } from "../actions/product";
import { getProductSuccess } from "../actions/product";

function* handleGetProduct(action) {
    const response = yield axios.get(`${API}/product/${action.payload.productId}`);
    yield put(getProductSuccess(response.data));
}

export function* productSaga() {
    yield takeEvery(getProduct, handleGetProduct)
}