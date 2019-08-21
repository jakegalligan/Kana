import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Button from '@material-ui/core/Button';import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import ModalDialog from 'react-bootstrap/ModalDialog';import ModalBody from 'react-bootstrap/ModalBody'
import {submitOrder} from '../../actions'


const OrderSubmitBar = (props) => {
    //import styling
    const classes = useStyles();
    //initialize state with showModal set to false
    const [showModal, setShowModal] = useState(false);    
    //intialize a state that holds the name input
    const [customerName, setCustomerName] = useState('');
    //intialize a state that holds the phone number inpiut
    const [phoneNumber, setPhoneNumber] = useState('');
    //intialize a state redirect which redirects when true
    const [redirect, setRedirect] = useState(false);

  
    //function that will set the name state to whatever input is put in name form
    const handleNameInputChange = (e) => { 
      setCustomerName(e.target.value);
    }

    //function that will set the phonenumber to what input is in phone number form
    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    }
    //submitInfo function will send user information as well as cart to server and redirect user to order completed page
    const submitOrder = () => {
        //format information to be properly stored in server
        let order = {
          cart: props.cart,
          customerName: customerName,
          phoneNumber: phoneNumber
        }
        props.submitOrder(order);
    }

    //render a componenet which redirects to order complete page when redirect is true
    const renderRedirect = () => {
      return (
        <div>
          <Redirect to = '/customer/review/3' />
        </div>
      )
    }

    //when the checkout button is clicked set showmodal to true have modal pop up that has user inpu their name and phone number
    const checkOut = () => {
      console.log('clickedcheckout button');
      setShowModal(true);
    }
    //closeModal function will set the value of showModal to false and close the modal
    const closeModal = () => {
      console.log('close modal')
      setShowModal(false)
      }
    

    return (
        <div className={classes.appBar}>
           {showModal ?  <div>
           <StyledModalDialog>
                <StyledModalBody> 
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        onChange={handleNameInputChange}
                        id="outlined-name"
                        label="Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        
                    />
                    <TextField
                        onChange={handlePhoneNumberChange}
                        id="outlined-name"
                        label="Number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div>
                    <Button onClick={() =>closeModal()} className={classes.button}>f</Button>
                    <Button onClick={() => submitOrder()} className={classes.button}>ff</Button>
                </div>
                </StyledModalBody>
            </StyledModalDialog>
        </div>: ''}
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolBar} >
            <Button onClick={() => checkOut()} className = {classes.buttonCheckout}>Checkout</Button>
          </Toolbar>
        </AppBar>
        {redirect? renderRedirect() : ''}
      </div>
    )
}

const mapStateToProps =(state) => {
	return {
		cart : state.cart
	}
}

const mapDispatchToProps = {
  submitOrder: submitOrder
}




export default connect(mapStateToProps, mapDispatchToProps)(OrderSubmitBar);

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