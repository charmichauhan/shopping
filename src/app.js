"use strict";
import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index.js';
//import {addToCart} from './actions/cartActions';
//import {getBooks, postBooks, deleteBooks, updateBooks} from './actions/booksActions';
import { logger }  from 'redux-logger';
import BooksList from './components/pages/booksList'
const middleware = applyMiddleware(logger);
 import { createLogger } from 'redux-logger';
 const logger = createLogger({});
 const store = createStore(reducer, applyMiddleware(logger));
//const store = createStore(reducers, middleware);
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
const Store = applyMiddleware(reduxPromise)(createStore);

import {Provider} from 'react-redux';

        ReactDOM.render(
                <Provider store={store(reducers)}>
            <BooksList />
                </Provider>
                    , document.getElementById('app'));

