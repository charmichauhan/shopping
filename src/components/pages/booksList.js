"use strict";

import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Grid, Col, Row, Button} from 'react-bootstrap';

import { getBooks } from '../.././actions/booksActions.js';
import BookItem from'./bookItem';
import BooksForm from'./booksForm';
import Cart from './cart';

class BooksList extends React.Component{
    //to dispatch function, we use
    componentDidMount(){
        this.props.getBooks(

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

        );
    }

render() {
    return (
        <div> Hello!!!</div>
    )
}


    render(){
    const booksList = this.props.books.map(function (booksArr) {
        return(

          <Col xs={12 } sm={6} md={4} key={booksArr.id}>
              <BookItem
              id={booksArr.id}
              title={booksArr.title}
              description={booksArr.description}
              price={booksArr.price}
              />
          </Col>
        )
    });

        return(
         <Grid>
             <Row>
                 <Cart/>
             </Row>
             <Row>
                 <Col xs={12} sm={g}>
                     <BooksForm/>
                 </Col>
                 {booksList}
             </Row>
         </Grid>
        )
    }
}
function mapStateToProps(state) {
    return{books: state.books.books}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getBooks:getBooks},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps )(BooksList);