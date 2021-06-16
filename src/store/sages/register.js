import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
// import { register, registerFailed, registerSuccess } from "../actions/register";

function* handleRegister(action) {
    try {
        yield axios.post(`http://localhost/api/signup`, action.payload)
        // 相当于让中间件执行dispatch
        yield put({ type: 'REGISTERSUCCESS' })
    } catch (e) {
        yield put({ type: 'REGISTERFAILED', message: e.response.data.error })
    }
}

export default function* registerSaga() {
    yield takeEvery('REGISTER', handleRegister)
}