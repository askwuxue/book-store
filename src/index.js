import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Routes from './components/admin/Routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
