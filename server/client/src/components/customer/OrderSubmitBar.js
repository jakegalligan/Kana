import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import OrderModal from './OrderModal'


const OrderSubmitBar = () => {
    const classes = useStyles();

    //initialize state with showModal set to false
    const [showModal, setShowModal] = useState(false);
    //when the checkout button is clicked set showmodal to true have modal pop up 
    const checkOut = () => {
      console.log('clickedcheckout button');
      setShowModal(true);
    }


    return (
        <div className={classes.appBar}>
           {showModal ? <OrderModal />: ''}
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolBar} >
            <Button onClick={() => checkOut()} className = {classes.button}>Checkout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default OrderSubmitBar;


const useStyles = makeStyles({
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
    button: {
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
    }
  });

