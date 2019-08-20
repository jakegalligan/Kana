import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderCart from './OrderCart';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Button from '@material-ui/core/Button';import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap';


const OrderReview = () => {

    const classes=useStyles();
    //initilaize state redirect which when true redirects user to completed order menu
    const [redirect, setRedirect] = useState(false);
    //map through the cart and render each time

    //when the submit order button is clicked send order to bartenders
    const submitOrder = () => {
        console.log('clickedsubmitorder');
        setRedirect(true);
    }

    const renderRedirect = () => {
        return (
            <Redirect to = '/customer/complete/3'>
            </Redirect>
        )
    }


    return (
        <div>
            <Link to = '/customer/menu'>Back to Menu</Link>
            <OrderCart />
            <Container>
                <Row>
                    <Col>
                        Subtotal
                    </Col>
                    <Col xs={{span:3, offset: 6}}>
                        Subtotal Amount
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Tax
                    </Col>
                    <Col xs={{span:3, offset: 6}}>
                        Tax amount
                    </Col>
                    {/* Possible tip incrementer */}
                </Row>
                <Row>
                    <Col xs={{span:3, offset: 9}}>
                        TotalPrice
                    </Col>
                </Row>
            </Container>
            <div className={classes.appBar}>
            <AppBar position="static" color="default">
                <Toolbar className={classes.toolBar} >
                    <Button onClick={()=>submitOrder()} className = {classes.buttonCheckout}>Submit</Button>
                </Toolbar>
            </AppBar>
            </div>
            {redirect? renderRedirect(): ''}
        </div>
    )
  };

  export default OrderReview;


  const useStyles = makeStyles(theme =>({
    appBar: {
      flexGrow: 1,
      position: 'sticky',
      top: 'auto',
      bottom: 0,
      zindex: 1
    },
    toolBar: {
      zindex: 1
    },
    buttonCheckout: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      zindex: 1,
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    }
}));