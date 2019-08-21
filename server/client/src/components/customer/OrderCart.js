import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';



const OrderCart = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        {props.name}
                    </Row>
                    <Row>
                        {props.ABV}
                    </Row>
                    <Row>
                        {props.ounce}
                    </Row>
                </Col>
                <Col xs={{span:3, offset: 6}}>
                    <Row>
                        +
                    </Row>
                    <Row>
                        {props.price}
                    </Row>
                    <Row>
                        -
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderCart;