import React, {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

const Drink = (props) => {
    const classes=useStyles();

    //when add drink button is clicked, add drink to cart and set renderCarts value to true
    const addDrink = () => {
        console.log('added');
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        Picture
                    </Col>
                    <Col>
                        <Row>Title</Row>
                        <Row>Company</Row>
                        <Row>Amount</Row>
                    </Col>
                    <Col xs={{span:3, offset: 3}}>
                        <Row>Price</Row>
                        <Row>
                            <Fab onClick={() => addDrink()} color="primary" aria-label="add" className={classes.fab}>
                                <AddIcon />
                            </Fab>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Drink;


//add styling to plus button
const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));