import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Converter from './components/Converter';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './redux/reducers/reducer';

const store = createStore(dataReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <Converter />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
