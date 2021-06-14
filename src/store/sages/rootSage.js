import { all } from 'redux-saga/effects';
import registerSaga from './register';

// 将saga进行合并
export default function* rootSaga() {
    yield all([registerSaga()])
}