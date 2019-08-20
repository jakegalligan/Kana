import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';



const OrderCart = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        Name
                    </Row>
                    <Row>
                        Company
                    </Row>
                    <Row>
                        Oz
                    </Row>
                </Col>
                <Col>
                    <Row>
                        +
                    </Row>
                    <Row>
                        Quantity
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