import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import { registerReducer } from "./register";
import { productsReducer } from './products'
import { searchReducer } from "./search";
import { filterReducer } from "./filter";


// 创建一个reducer
// const rootReducer = combineReducers({
//     test: testReducer
// })
// export default rootReducer;

// 创建并合并reducer
const createRootReducer = (history) => combineReducers({
    //connectRouter是一个函数，返回一个函数，该函数作为redux仓库中路由数据的reducer，进行更新仓库操作
    router: connectRouter(history),
    register: registerReducer,
    products: productsReducer,
    search: searchReducer,
    filter: filterReducer
})

export default createRootReducer;