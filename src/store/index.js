import { createStore } from "redux";
import rootReducer from './reducers';

// 创建store
const store = createStore(rootReducer);

export default store;