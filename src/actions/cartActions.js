"use strict";
export const ADD_TO_CART = 'ADD_TO_CART';

export function addToCart(book) {
    return{

        type: ADD_TO_CART, payload: book

    }
}