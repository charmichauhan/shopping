"use strict";

//import {createStore} from 'redux';
import {GET_BOOKS, POST_BOOK, DELETE_BOOK, UPDATE_BOOK} from './../actions/booksActions';
//export function cartReducers(state={cart:[]},action){
//export function booksReducers(state
export function booksReducers(state= {
                                   books:

                                       [{
                                           id: '1',
                                           title: 'this is book title',
                                           description: 'this is book description',
                                           price: 3031
                                       },
                                           {
                                               id: '2',
                                               title: 'this is book title of 2',
                                               description: 'this is book description',
                                               price: 3032
                                           }
                                       ]


                               }

, action){
    switch (action.type){

        case GET_BOOKS:
            return {...state,books:[...state.books]};
            break;

        case POST_BOOK:
           // let books = state.books.concat(action.payload);
            return {books:[...state, ...action.payload]};
            break;

        case DELETE_BOOK:
            const currentBookToDelete = [...state.books];
            var indexToDelete = currentBookToDelete.findIndex(
                function (book) {
                    return book.id === action.payload.id
                }
            );
            return {books:[...currentBookToDelete.slice(0,indexToDelete),
                ...currentBookToDelete.slice(indexToDelete+1)
            ]};
            break;

        case UPDATE_BOOK:
            const currentBookToUpdate = [...state.books];
            var indexToUpdate = currentBookToUpdate.findIndex(
                function (book) {
                    return book.id === action.payload.id
                }
            );
            const newBookToUpdate = {
                ...currentBookToUpdate[indexToUpdate],
                title: action.payload.title
            };
            console.log();
            return {books:[...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,
                ...currentBookToUpdate.slice(indexToUpdate+1)
            ]};
            break;

    }
    return state
};

