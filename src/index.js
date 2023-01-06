import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore,applyMiddleware , compose} from 'redux'
import reducer from './reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Provider store={store}>
          <App/>
      </Provider>
    </>
  </React.StrictMode>
);
  