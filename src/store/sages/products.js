import { takeEvery, put } from "@redux-saga/core/effects";
import axios from "axios";
import { getProducts, getProductsSuccess } from "../actions/products";
import { API } from '../../config';

// 触发getProduct action时接收的action参数
function* handleGetProduct(action) {
    // 获取product数据
    const response = yield axios.get(`${API}/products`, {
        params: action.payload
    });
    // 触发getProductSuccess actions并且传递参数action在reducers被接收
    yield put(getProductsSuccess({
        sortBy: action.payload.sortBy,
        products: response.data
    }));
}

export default function* productsSage() {
    // 触发action时执行函数handleGetProduct
    yield takeEvery(getProducts, handleGetProduct)
}