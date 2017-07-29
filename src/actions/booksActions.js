"use strict";

export const GET_BOOKS = 'GET_BOOKS';
export const POST_BOOK = 'POST_BOOK';
export const DELETE_BOOK = 'DELETE_BOOK';
export const UPDATE_BOOK = 'UPDATE_BOOK';

export function getBooks() {
    return {
        type: GET_BOOKS

    };
}

export function postBooks(book) {
    return {
        type: POST_BOOK, payload: {id: book}

    };
}
    export function deleteBooks(id) {
        return {
            type: DELETE_BOOK, payload: {id: 1}

        };
    }
export function updateBooks(book) {
    return {
        type: UPDATE_BOOK, payload: {id: book}

    };
}