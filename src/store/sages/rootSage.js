import { all } from 'redux-saga/effects';
import registerSaga from './register';
import productsSage from './products'
import searchSaga from './search';
import filterSaga from './filter';

// 将saga进行合并
export default function* rootSaga() {
    yield all([registerSaga(), productsSage(), searchSaga(), filterSaga()])
}