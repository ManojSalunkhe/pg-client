import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configStore from './redux/store/configStore';
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const store = configStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

