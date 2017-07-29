"use strict";

// import {combineReducers} from 'redux';
// import {booksReducers} from './booksReducers';
//
// export default combineReducers({
//     books: booksReducers,
// })

import {ADD_TO_CART} from '../actions/cartActions';

export function cartReducers(state={cart:[]},action){
    switch (action.type){
        case ADD_TO_CART:
            return {cart:[...state.cart,...action.payload]};
            break;
    }
}