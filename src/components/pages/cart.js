// "use strict";
//
// import React from 'react';
// import {connect} from 'react-redux';
// import {Panel, Col, Row, Button, Well} from 'react-bootstrap';
//
//
//
// class Cart extends React.Component{
// render(){
//     if(this.props.cart[0]){
//         return this.renderCart();
//     }
//     else{
//         return this.renderEmpty();
//     }
// }
// }
//
// function mapStateToProps(state) {
//     cart: this.cart.cart;
// }
// export default connect(mapStateToProps) (Cart);

"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Panel, Col, Row, Well, Button, ButtonGroup, Label } from 'react-bootstrap';

class Cart extends React.Component {
    render() {
        if (this.props.cart[0]) {
            return this.renderCart();
        } else {
            return this.renderEmpty();
        }
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function (cartArr) {
            return (
                <Panel key={cartArr}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArr.title}</h6>
                            <span></span>
                        </Col>
                        <Col xs={12} sm={4}>
                            <h6>usd.{ cartArr.price}</h6>
                            <span></span>
                        </Col>
                        <Col xs={12} sm={4}>
                            <h6>qty. <label bsStyle="success"> </label></h6>
                            <span></span>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minwidth:'300px'}}>
                                <Button bsStyle="default" bsSize="small">-</Button>
                                <Button bsStyle="default" bsSize="small">+</Button>
                                <span></span>
                                <Button bsStyle="danger" bsSize="small">DELETE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            );
        });

        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
            </Panel>
        );
    }
    renderEmpty() {
        return (<div></div>);
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart
    }
}

export default connect(mapStateToProps)(Cart);

