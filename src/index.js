import React from 'react';
import ReactDOM from 'react-dom';
// import Routes from './components/admin/Routes';
import './index.css';
import './style.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import App from './App';
// import store from './store';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 获取全局路由信息 */}
      <ConnectedRouter history={history}>
        <App></App>
        {/* <Routes></Routes> */}
      </ConnectedRouter>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
reportWebVitals();
