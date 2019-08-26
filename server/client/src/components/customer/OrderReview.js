import React, {useState, useEffect} from 'react';
import {Link, Redirect} from 'react-router-dom';
import OrderCart from './OrderCart';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';import Toolbar from '@material-ui/core/Toolbar';import Button from '@material-ui/core/Button';import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {submitOrder, getCart} from '../../actions';
import uuidv1 from 'uuid'
import moment from 'moment'
import Typography from '@material-ui/core/Typography';
import { textAlign } from '@material-ui/system';
import HeaderBar from '../shared/HeaderBar'
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar';
    
const OrderReview = (props) => {
    console.log(props.cart);
    const[showSpinner, setShowSpinner] = useState(false);

    
    const classes=useStyles();
    //initilaize state redirect which when true redirects user to completed order menu
    const [redirect, setRedirect] = useState(false);
    //map through the cart and render each time

    //when the submit order button is clicked send order to bartenders
    const submitOrder = () => {
        //wait a couple seconds after an order is submitted to give the user the feel that order is being sent
        setTimeout(function() {setRedirect(true)}, 1000);
        //set the showSpinner value to true when the submit Order buttons is clicked
        setShowSpinner(true);
        //create a unique id to identify the order
        let uId1 = uuidv1();
        //get current date/time to know when data was made
        let currentDate = new Date();
        //format information to be properly stored in server
        let order = {
          uId: uId1,
          cart: props.cart,
          customerName: props.name,
          phoneNumber: props.number,
          isSubmitted: true,
          timeOrderSubmitted: currentDate,   
        }
        console.log(order);
        props.submitOrder(order)
        // setRedirect(true);
        console.log('submitting');
        // socket.emit('order', order)
    }

    //when redirect is set to true this function will run and redirect the user
    const renderRedirect = () => {
        return (
            <Redirect to = {`/customer/complete`}>
            </Redirect>
        )
    }
    //go through all the drink in the cart and return the total price of all of them
    const getTotal = () => {
        return props.cart.reduce((sum, drink) => {
            let price = drink.price * drink.quantity
            return sum + price
        }, 0)
    }
    //multiply total by sales tax and then round to nearest hundreths place
    const getTax =(total) => {
        let tax = total * .0625;
        return Math.round(100 * tax)/100;
    }
    const renderCart = () => {
        console.log('rere')
         return props.cart.map((drink) => {
             if (drink.quantity >=1) {
            return (
                <OrderCart
                name={drink.name}
                ABV={drink.ABV}
                price={drink.price}
                descriptor={drink.descriptor}
                ounce={drink.ounce}
                key={drink._id}
                quantity={drink.quantity}                >
                </OrderCart>
            )
             }
        })
    }


    return (
        <div>           
        <StyledNavbar>
            <Container className={classes.containerNavbar}>
                <Row>
                <Col xs={2}>
                    <Typography className={classes.appTitle}>
                        <Link to='/customer/menu'>
                        <FontAwesomeIcon icon={faAngleLeft} className={classes.icon}/>
                        </Link>
                    </Typography>
                    </Col>
                    <Col xs={{offset: 3}}>
                    <Typography className={classes.appTitle}>
                        Tab
                    </Typography>
                </Col>
                    <Col >\
                    </Col>
                </Row>
            </Container>
        </StyledNavbar>
        <Container className={classes.container}>
            {renderCart()}
            <Container >
                <Row className={classes.subTotalRow}>
                    <Col>
                    <Typography className={classes.subtotalPlusTax}>Subtotal</Typography>
                    </Col>
                    <Col xs={{span:2, offset: 6}}>
                        <Typography className={classes.subtotal}>${getTotal()}</Typography>
                    </Col>
                </Row>
                <Row className={classes.taxRow}>
                    <Col>
                        <Typography className={classes.subtotalPlusTax}>Tax</Typography>
                    </Col>
                    <Col xs={{span:3, offset: 6}}>
                        <Typography className={classes.subtotal}>${getTax(getTotal())}</Typography>
                    </Col>
                </Row>
                <Row>
                    <Col className={classes.totalcolumn} xs={{span:3, offset: 9}}>
                    <Typography className={classes.total}>Total</Typography>
                    <Typography className={classes.total}>${getTax(getTotal()) + getTotal()}</Typography>    
                    </Col>
                </Row>
            </Container>
            {showSpinner? <Spinner className={classes.spinner} animation="border"  role="status">
                <span className="sr-only">Loading...</span>
                </Spinner>: ''}
            <div className={classes.appBar}>
            <AppBar className={classes.appBar}>
                <Toolbar className={classes.toolBar} >
                    <Button onClick={()=>submitOrder()} className = {classes.buttonCheckout}>Submit Order</Button>
                </Toolbar>
            </AppBar>
            </div>
            {redirect? renderRedirect(): ''}
        </Container>
        </div>

    )
  };

  const mapStateToProps =(state) => {
	return {
        cart : state.cart,
        name: state.name,
        number: state.number
    }
}
   const mapDispatchToProps = {
       submitOrder: submitOrder,
       getCart: getCart
   }
  export default connect(mapStateToProps,mapDispatchToProps)(OrderReview);


  const useStyles = makeStyles(theme =>({
    appBar: {
      flexGrow: 1,
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      zindex: 1,
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',

    },
    toolBar: {
      zindex: 1
    },

    buttonCheckout: {
      background: 'linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      zindex: 1,
      zIndex: 1,
    //   top: -30,
      left: 0,
      right: 0,
      margin: '0 auto',
    },
    container: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
        minHeight: '100vh'
    },
    spinner: {
        fontSize: '20px',
        color: 'white',
        marginLeft: '50%',
        zIndex: '10'
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
    },
    taxRow: {
        marginBottom: '20%'
    },
    subtotal: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'right',
        fontFamily: '\'Raleway\', sans-serif',

        // marginTop: '40%' 

    },
    subTotalRow: {
        marginTop: '10%',
        marginBottom: '10%',
    },
    subtotalPlusTax: {
        fontSize: '20px',
        color: 'white',
        textAlign: 'left',
        // marginTop: '40%' 
        fontFamily: '\'Raleway\', sans-serif',
                fontStyle: 'italic'


    },
    total: {
        fontSize: '25px',
        color: 'white',
        textAlign: 'right',
        fontFamily: '\'Raleway\', sans-serif',
        fontStyle: 'italic'


    },
    totalcolumn: {
        alignText: 'left',
        fontStyle: 'italic'

    },
    appTitle: {
        color: 'White',
        fontSize: '30px',
        fontFamily: '\'Raleway\', sans-serif',

    },
    containerNavBar: {
      textAlign: 'center' ,
      display: 'in-line' 
    },
    icon: {
        color:'white'
    }
}));

//set styling for navbar
const StyledNavbar = styled(Navbar)`
// background: linear-gradient(to right top, #5c258d, #5e23a7, #5c22c3, #5222e0, #3826ff);
height: 8vh;
`;
