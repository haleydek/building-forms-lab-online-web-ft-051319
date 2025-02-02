import React from 'react';
import ReactDOM from 'react-dom';
import manageBand from './reducers/manageBand'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App';

const store = createStore(manageBand);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
