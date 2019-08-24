import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import {incrementDrink, decrementDrink,getCart} from '../../actions'
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'


const OrderCart = (props) => {

    // useEffect(() => {
    //         console.log('fetching all that in da cart')
    //     //     //fetch newly added orders every second
    //         setInterval(()=>{props.getCart()},1000);
            
    //     },[])
    const classes = useStyles();
    console.log(props);
    // const[rerender, setRerender] = useState(false);
    // useEffect(() => {
    //     console.log('rerend')
    // //     //fetch newly added orders every second
    //     setInterval(()=>{setRerender(true)},1000);
        
    //when this function runs the quantity of this drink in the cart is decreased by 1
    const decrementDrinkQuantity = (e) => {
        // props.setRerender(true)
        console.log(props.name)
        props.decrementDrink(props.name);
    }
    //when this function runs the quantity of this drink in the cart is increment by 1
    const incrementDrinkQuantity = (e) => {
        console.log(props.name)
        // props.setRerender(true)
        props.incrementDrink(props.name);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Typography className={classes.drinkName}>
                            {props.name}
                        </Typography>
                    </Row>
                    <Row>
                        <Typography className={classes.drinkPrice}>
                            Price: {props.price * props.quantity}
                        </Typography>
                    </Row>
                </Col>
                <Col xs={{span:3, offset: 6}} className={classes.incdec}>
                    <Row>
                        {/* <Fab value={props.name} onClick={(e) =>incrementDrinkQuantity(e)} color="primary" aria-label="add" className={classes.fab}> */}
                            <FontAwesomeIcon className={classes.down} icon={faCaretUp} onClick={(e) =>incrementDrinkQuantity(e)} />
                        {/* </Fab> */}
                    </Row>
                    <Row>
                        <Typography className={classes.drinkQuantity}>
                            {props.quantity}
                        </Typography>
                    </Row>
                    <Row>
                        {/* <Fab value ={props.name} onClick={(e) =>decrementDrinkQuantity(e)} color="primary" aria-label="add" className={classes.fab}> */}
                        <FontAwesomeIcon className={classes.down} icon={faCaretDown}  onClick={(e) =>decrementDrinkQuantity(e)} />
                        {/* </Fab> */}
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
    down: {
        fontSize: '40px',
        marginLeft: '50%'
    },
    incdec: {
        textAlign: 'center'
    },
    icon: {
        zIndex: 1
    },
    drinkName: {
        color: 'white',
        marginTop: '50%'
    },
    drinkPrice:{
        color: 'white'
    },
    drinkQuantity: {
        color: 'white',
        marginLeft: '60%'
    }
  }));