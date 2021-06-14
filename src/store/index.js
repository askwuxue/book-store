import { createStore } from "redux";
// import rootReducer from './reducers';
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";
import { applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sages/rootSage";
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleWare = createSagaMiddleware();
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        // redux-devtool的使用
        composeWithDevTools(
            applyMiddleware(routerMiddleware(history), sagaMiddleWare)
        )
    )
    sagaMiddleWare.run(rootSaga)
    return store;
}

// 1. 创建store
// const store = createStore(rootReducer);
// 2. 导出全局使用的store 
// export default store;

