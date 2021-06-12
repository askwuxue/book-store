import { combineReducers } from "redux";
import testReducer from './test';
import { connectRouter } from 'connected-react-router'


// 创建一个reducer
// const rootReducer = combineReducers({
//     test: testReducer
// })
// export default rootReducer;


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    test: testReducer
})

export default createRootReducer;