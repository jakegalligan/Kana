import React, {useState, useEffect} from 'react';import {Link, Redirect} from 'react-router-dom';import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Button from '@material-ui/core/Button';import TextField from '@material-ui/core/TextField';
import styled from "styled-components";import ModalDialog from 'react-bootstrap/ModalDialog';import ModalBody from 'react-bootstrap/ModalBody';import {submitOrder, setName, setNumber} from '../../actions';
import uuidv1 from 'uuid';import Typography from '@material-ui/core/Typography';import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';import Grow from '@material-ui/core/Grow';import {Container, Row, Col} from 'react-bootstrap';

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
    //initialize a state errorTextName message which is renders the error text when true 
    const [errorTextNumber, setErrorTextNumber] = useState(false);
    //initialize a state errorTextName message which is renders the error text when true 
    const [errorTextName, setErrorTextName] = useState(false);

  
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
      //store the phone nubmer in a variable so it can be manipulated
        let formattedNumber=phoneNumber
        //if it is missing the +1 call add it
        if (formattedNumber.length===10) {
          formattedNumber = '1'+phoneNumber;
        }
        if (formattedNumber.length!==11) {
          return setErrorTextNumber(true);
        }

        //check to see if a name of at least 5 characters is entered
        if (customerName.length < 5) {
          return setErrorTextName(true);
        }
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
      setShowModal(true);
    }
    //closeModal function will set the value of showModal to false and close the modal
    const closeModal = () => {
      setShowModal(false)
      }

    const renderNumberError = () => {
      return (
      <div>
        <Typography className={classes.errorText}>
          Invalid phone number, please use format 1xxxxxxxxxx
        </Typography>
      </div>
      )
    }
    const renderNameError = () => {
      return (
      <div>
        <Typography className={classes.errorText}>
          Invalid name, please use your first and last name
        </Typography>
      </div>
      )
    }
    const numItemsInCart = () => {
        return props.cart.reduce((sum, drink) => {
          return sum + drink.quantity
      }, 0)
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
                      {errorTextName? renderNameError(): ''}
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
                {errorTextNumber? renderNumberError(): ''}
                <Typography className={classes.labelNotes}>*This information allows us to identify your order as well as notify ou when it's ready!</Typography>
                <div>
                  <br />
                    <Button onClick={() =>closeModal()} className={classes.buttonModalClose}>Back To<br /> Menu</Button>
                    <Button onClick={() => submitOrder()} className={classes.buttonModalSubmit}>Review <br /> Order</Button>
                    <br />
                    <br />
                </div>
                </StyledModalBody>
            </StyledModalDialog>
        </div></Zoom>: ''}
        <AppBar position="static" className={classes.appBar}>
        <Grow in={true} timeout={800}>
          <Toolbar className={classes.toolBar} >
            <Container className={classes.bottomBar}>
            <Row>
           {showModal? <div></div>:
           <Button onClick={() => checkOut()} className = {classes.buttonCheckout}>Checkout</Button>}
           {showModal? <div></div>:<Typography className={classes.drinkCount}>
             <Container className={classes.drinkCountContainer} >
           Drinks:<br /> {numItemsInCart()}
           </Container >
           </Typography>}
           </Row>
           <Row className={classes.items}>
             <Col xs={{span: 4, offset: 4}}>
           </Col>

           </Row>
           </Container>
          </Toolbar>
          </Grow>
        </AppBar>
        {redirect? renderRedirect() : ''}
      </div>
    )
}

const mapStateToProps =(state) => {
	return {
    cart : state.cart,
    addItem: state.addItem
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
      flexGrow: 3,
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      zindex: 1,
      boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .3)',
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
    },
    toolBar: {
      zindex: 1,
      boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .3)',
    },
    buttonModalSubmit: {
      color:'white',
      marginRight: '5px',
      boxShadow: '0 3px 5px 2px rgba(25, 25, 25, .3)',
      marginTop: '-10px'
    },
    buttonModalClose: {
      color: 'white',
      boxShadow: '0 3px 5px 2px rgba(25, 25, 25, .3)',
      marginRight: '5px',
      marginTop: '-10px'
    },
    buttonCheckout: {
      color: 'white',
      height: 48,
      padding: '0 30px',
      zindex: 1,
      left: 0,
      right: 0,
      margin: '0 auto',
      marginLeft: '30%',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      color: 'white',
    },
    dense: {
    },
    drinkCount: {
      paddingLeft: '3%',
      fontStyle: 'italic'
    },
    drinkCountContainer: {
      borderLeft: '3px solid',
      borderColor: '#282828',
      padding: 0,
      marginleft: '10%',
      marginTop: '-3%',
      height: '250%',
      width: '150%',
      marginRight: '10%',
      marginLeft: '-15%'
    },
    errorText: {
      color: 'white',
      fontStyle: 'italic',
      fontSize: '10px'
    },
    items: {
      marginBottom: '2%',
      fontfamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '1.5', 
      fontStyle: 'italic'
       },
      numDrinks: {
      },
    menu: {
      width: 200,
    },
    bottomBar: {
      textAlign: 'center',
    },
    label: {
      fontSize: '11px',
      color: 'white',
      fontFamily: '\'Raleway\', sans-serif',

    },
    labelTitle: {
      color: 'white',
      fontSize: '15px',
      marginBottom: '15px',
      fontFamily: '\'Raleway\', sans-serif',

    },
    labelNotes: {
      fontSize: '10px',
      color: 'white',
      marginTop: '20px',
      fontFamily: '\'Raleway\', sans-serif',

    }
});

const StyledModalBody = styled(ModalBody)`
    height: 75vh;
    z-index: 10;
    background-color: black'
    width: 100%;
`
const StyledModalDialog = styled(ModalDialog)`
    z-index: 10;
    position: fixed;
    border-style: solid;
    height: 90vh;
    width: 96.5vw;
`