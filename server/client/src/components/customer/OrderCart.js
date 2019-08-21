import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const OrderCart = (props) => {
    //when this function runs the quantity of this drink in the cart is decreased by 1
    const decrementDrinkQuantity = () => {
        console.log('decrement');
    }
    //when this function runs the quantity of this drink in the cart is increment by 1
    const incrementDrinkQuantity = () => {
        console.log('increment')
    }
    const classes = useStyles();
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
                        <Fab onClick={incrementDrinkQuantity} color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                        </Fab>
                    </Row>
                    <Row>
                        {props.price}
                    </Row>
                    <Row>
                    <Fab onClick={decrementDrinkQuantity} color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                    </Fab>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderCart;


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));