import React from 'react';import {Container, Row, Col} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';import {incrementDrink, decrementDrink,getCart} from '../../actions'
import { connect } from 'react-redux';import { Typography } from '@material-ui/core';import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'


const OrderCart = (props) => {
    const classes = useStyles();
    //when this function runs the quantity of this drink in the cart is decreased by 1
    const decrementDrinkQuantity = (e) => {
        props.decrementDrink(props.name);
    }
    //when this function runs the quantity of this drink in the cart is increment by 1
    const incrementDrinkQuantity = (e) => {
        props.incrementDrink(props.name);
    }
    return (
        <Container className={classes.container}>
            <Row>
                <Col>
                    <Row>
                        <Typography className={classes.drinkName}>
                            {props.name}
                        </Typography>
                    </Row>
                    <Row>
                        <Typography className={classes.drinkPrice}>
                            ${props.price * props.quantity}
                        </Typography>
                    </Row>
                </Col>
                <Col xs={{span:3, offset: 6}} className={classes.rightsideContainer}>
                    <Row>
                            <FontAwesomeIcon className={classes.caret} icon={faAngleUp} onClick={(e) =>incrementDrinkQuantity(e)} />
                    </Row>
                    <Row>
                        <Typography className={classes.drinkQuantity}>
                            {props.quantity}
                        </Typography>
                    </Row>
                    <Row>
                        <FontAwesomeIcon className={classes.caret} icon={faAngleDown}  onClick={(e) =>decrementDrinkQuantity(e)} />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = {
    incrementDrink: incrementDrink,
    decrementDrink: decrementDrink,
    getCart: getCart
}

const mapStateToProps =(state) => {
	return {
        name: state.name,
        number: state.number
	}
}
export default connect(null, mapDispatchToProps)(OrderCart)


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      zIndex: 3,
      height: '6vh',
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    caret: {
      fontSize: '40px',
      marginLeft: '50%',
      color: 'white'
    },
    rightsideContainer: {
        textAlign: 'center'
    },
    container: {
        boxShadow: '0 3px 5px 2px rgba(45, 45, 45, .3)',
    },
    icon: {
        zIndex: 1
    },
    drinkName: {
        color: 'white',
        marginTop: '25%'
    },
    drinkPrice:{
        color: 'white'
    },
    drinkQuantity: {
        color: 'white',
        marginLeft: '60%'
    }
  }));