import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Button from '@material-ui/core/Button';import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import ModalDialog from 'react-bootstrap/ModalDialog';import ModalBody from 'react-bootstrap/ModalBody'
import {submitOrder, setName, setNumber} from '../../actions';
import uuidv1 from 'uuid';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';



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
        props.setName(customerName);
        props.setNumber(phoneNumber);
        setRedirect(true);
    }

    //render a componenet which redirects to order complete page when redirect is true
    const renderRedirect = () => {
      return (
        <div>
          <Redirect to = {`/customer/review/`} />
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
           {showModal ?  <Zoom in={true}><div>
           <StyledModalDialog>
                <StyledModalBody> 
                <Typography className={classes.labelTitle}>
                  Before we can finalize your order we need some info
                </Typography>
                <form className={classes.container} noValidate autoComplete="off">
                  <Typography className={classes.label}>Name (as it appears on license)</Typography>
                    <TextField className={classes.input}
                        onChange={handleNameInputChange}
                        id="outlined-name"
                        label="Full Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <Typography className={classes.label}>Phone Number (no spaces or dashes)</Typography>
                    <TextField className={classes.input}
                        onChange={handlePhoneNumberChange}
                        id="outlined-name"
                        label="Number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                </form>
                <div>
                  <br />
                    <Button onClick={() =>closeModal()} className={classes.buttonModalClose}>Back To Menu</Button>
                    <Button onClick={() => submitOrder()} className={classes.buttonModalSubmit}>submitOrder</Button>
                    <br />
                    <br />
                </div>
                </StyledModalBody>
            </StyledModalDialog>
        </div></Zoom>: ''}
        <AppBar position="static" className={classes.appBar}>
          <Toolbar className={classes.toolBar} >
           {showModal? <div></div>:<Button onClick={() => checkOut()} className = {classes.buttonCheckout}>Checkout</Button>}
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
  submitOrder: submitOrder,
  setName: setName,
  setNumber: setNumber
}




export default connect(mapStateToProps, mapDispatchToProps)(OrderSubmitBar);

const useStyles = makeStyles({
    appBar: {
      flexGrow: 1,
      position: 'sticky',
      top: 'auto',
      bottom: 0,
      zindex: 1,
      // textAlign: 'center'
    },
    toolBar: {
      zindex: 1
    },
    buttonModalSubmit: {
      color:'white',
      // backgroundColor: 'green',
      marginRight: '5px',
      borderStyle: 'solid',
      borderWidth: '1px',
      width: '30vw'
    },
    buttonModalClose: {
      color: 'white',
      // backgroundColor: 'yellow',
      borderStyle: 'solid',
      borderWidth: '1px',
      marginRight: '5px'
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
      color: 'white',
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
    },
    dense: {
    },
    menu: {
      width: 200,
    },
    label: {
      fontSize: '10px',
      color: 'white'
    },
    labelTitle: {
      color: 'white',
      fontSize: '15px',
      marginBottom: '15px'
    }
});

const StyledModalBody = styled(ModalBody)`
    height: 75vh;
    zindex: 10;
    border-style: solid;
    border-color: #282828;
    border-width: 15px;
    background-color: black'
    width: 100%;
`
const StyledModalDialog = styled(ModalDialog)`
    zindex: 10;
    border-style: solid;
    height: 80vh;
    width: 96.5vw;
    // text-align: center
`