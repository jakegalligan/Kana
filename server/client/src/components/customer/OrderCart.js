import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove'
import {incrementDrink, decrementDrink} from '../../actions'
import { connect } from 'react-redux';

const OrderCart = (props) => {
    const classes = useStyles();
    console.log(props);
    // const[rerender, setRerender] = useState(false);
    // useEffect(() => {
    //     console.log('rerend')
    // //     //fetch newly added orders every second
    //     setInterval(()=>{setRerender(true)},1000);
        
    //when this function runs the quantity of this drink in the cart is decreased by 1
    const decrementDrinkQuantity = (e) => {
        props.setRerender(true)
        console.log(e.target.value)
        props.decrementDrink(e.target.value);
    }
    //when this function runs the quantity of this drink in the cart is increment by 1
    const incrementDrinkQuantity = (e) => {
        console.log(e.target.value)
        props.setRerender(true)
        props.incrementDrink(e.target.value);
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        {props.name}
                    </Row>
                    <Row>
                        {props.ABV}
                    </Row>
                    <Row>
                        {props.ounce}
                    </Row>
                </Col>
                <Col xs={{span:3, offset: 6}}>
                    <Row>
                        <Fab value={props.name} onClick={(e) =>incrementDrinkQuantity(e)} color="primary" aria-label="add" className={classes.fab}>
                            <AddIcon />
                        </Fab>
                    </Row>
                    <Row>
                        {props.price}
                    </Row>
                    <Row>
                        <Fab value ={props.name} onClick={(e) =>decrementDrinkQuantity(e)} color="primary" aria-label="add" className={classes.fab}>
                                <RemoveIcon />
                        </Fab>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

const mapDispatchToProps = {
    incrementDrink: incrementDrink,
    decrementDrink: decrementDrink
}
export default connect(null, mapDispatchToProps)(OrderCart)


const useStyles = makeStyles(theme => ({
    fab: {
      margin: theme.spacing(1),
      zIndex: 3
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
    icon: {
        zIndex: 1
    }
  }));