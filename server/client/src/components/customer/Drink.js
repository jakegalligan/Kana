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
import Typography from '@material-ui/core/Typography';



const Drink = (props) => {
    const classes=useStyles();
    //when add drink button is clicked, add drink to cart
    const addDrink = (drink) => {
        props.addToCart(drink)
    }

    return (
        <div>
            <Container className={classes.container}>
                <Row>
                    <Col xs={2}>
                        <Typography className={classes.descriptor}>
                        {props.descriptor}
                        </Typography>
                    </Col>
                    <Col xs={{span: 5, offset: 1}}>
                        <Row><Typography className={classes.name}>{props.name}</Typography></Row>
                        <Row><Typography className={classes.abv}>ABV: {props.ABV}%</Typography></Row>
                        <Row><Typography className={classes.price}>${props.price}</Typography></Row>
                    </Col>
                    <Col className={classes.centeredcol} xs={{span:2, offset: 2}}>
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
      height: '6vh'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    container: {
        textAlign: 'left',
        marginTop: '10px'
    },
    centeredcol: {
        textAlign: 'center'
    },
    name: {
        color: 'white'
    },
    abv: {
        color: 'white',
        fontSize: '12px'
    },
    price: {
        color: 'white',
        fontSize: '12px'
    },
    descriptor: {
        color: 'white'
    }
  }));