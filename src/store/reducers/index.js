import { combineReducers } from "redux";
import testReducer from './test';

// 创建一个reducer
const rootReducer = combineReducers({
    test: testReducer
})

export default rootReducer;