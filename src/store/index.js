import { createStore } from "redux";
// import rootReducer from './reducers';
import { createBrowserHistory } from "history";
import createRootReducer from "./reducers";
import { applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    )
    return store;
}

// 1. 创建store
// const store = createStore(rootReducer);
// 2. 导出全局使用的store 
// export default store;

