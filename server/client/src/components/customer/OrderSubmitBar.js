import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalBody from 'react-bootstrap/ModalBody'



const OrderSubmitBar = () => {
    const classes = useStyles();

    
    //intialize a state that holds the name input

    //intialize a state that holds the phone number inpiut

    //closeModal function will set the value of showModal to false and close the modal
    const closeModal = () => {
      console.log('close modal')
      setShowModal(false)
  }


  //submitInfo function will send information to server and redirect user to order completed page
  const submitInfo = () => {
      console.log('submit')
  }

    //initialize state with showModal set to false
    const [showModal, setShowModal] = useState(false);
    //when the checkout button is clicked set showmodal to true have modal pop up 
    const checkOut = () => {
      console.log('clickedcheckout button');
      setShowModal(true);
    }


    return (
        <div className={classes.appBar}>
           {showModal ?  <div>
           <StyledModalDialog>
                <StyledModalBody> 
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        //onchange
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-name"
                        label="Number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div>
                    <Button onClick={() =>closeModal()} className={classes.button}>f</Button>
                    <Button onClick={() => submitInfo()} className={classes.button}>ff</Button>
                </div>
                </StyledModalBody>
            </StyledModalDialog>
        </div>: ''}
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolBar} >
            <Button onClick={() => checkOut()} className = {classes.buttonCheckout}>Checkout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default OrderSubmitBar;


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

const StyledModalBody = styled(ModalBody)`
    height: 80vh;
    zindex: 10;
`
const StyledModalDialog = styled(ModalDialog)`
    zindex: 10
    height: 80vh;
`