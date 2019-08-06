import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import GlobalStyles from './styles/GlobalStyles'
import App from './App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalStyles />
    <App />
  </Provider>,
  document.getElementById('root'));