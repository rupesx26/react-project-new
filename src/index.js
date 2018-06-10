import React from 'react';
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';
import { render } from 'react-dom' 
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { logger } from 'redux-logger'

const store = createStore(reducer,applyMiddleware(thunk, logger))
render(
<Provider store={store}>
   <App />
</Provider>,
document.getElementById('root')
);
registerServiceWorker();
