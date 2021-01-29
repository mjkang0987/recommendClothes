import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './styles/style.scss';
import rootReducer from './store/modules';
import App from './App';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
