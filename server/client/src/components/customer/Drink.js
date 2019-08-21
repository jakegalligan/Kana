import React, {useState} from 'react';
import { connect } from 'react-redux';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import {addToCart} from '../../actions'

const Drink = (props) => {
    const classes=useStyles();
    //when add drink button is clicked, add drink to cart and set renderCarts value to true
    const addDrink = (drink) => {
        console.log('added');
        props.addToCart(drink)
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        {props.descriptor}
                    </Col>
                    <Col>
                        <Row>{props.name}</Row>
                        <Row>{props.ABV}</Row>
                        <Row>{props.ounce}</Row>
                    </Col>
                    <Col xs={{span:3, offset: 3}}>
                        <Row>{props.price}</Row>
                        <Row>
                            <Fab onClick={() => addDrink(props)} color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

const mapDispatchToProps = {
    addToCart: addToCart
}
export default connect(null,mapDispatchToProps)(Drink);


//add styling to plus button
const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));