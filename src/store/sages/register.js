import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
// import { register, registerFailed, registerSuccess } from "../actions/register";

function* handleRegister(action) {
    try {
        yield axios.post(`http://localhost/api/signup`, action.payload)
        yield put({ type: 'REGISTERSUCCESS' })
    } catch (e) {
        yield put({ type: 'REGISTERFAILED' })
    }
}

export default function* registerSaga() {
    yield takeEvery('REGISTER', handleRegister)
}