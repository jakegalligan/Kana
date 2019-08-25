import React, {useState, useEffect} from 'react';
import Order from './Order';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchOrders} from '../../actions';
import HeaderBar from '../shared/HeaderBar';
import { makeStyles } from '@material-ui/core/styles';
import { Grow } from '@material-ui/core';




const OrderBacklog = (props) => {
    const classes = useStyles();
    // on initial page load get orers
    useEffect(() => {
        //fetch newly added orders every second
        setInterval(()=>{props.fetchOrders()},6000);
        
    },[])
    //go throuhg all unCompleted orders in database and render them
    const renderUncompletedOrders = () => {
        return props.orders[0].map(individualOrder => {
            console.log('renderingtheprops');
            return (
            <Order
                order={individualOrder}
            >
            </Order>
            )
        })
    }
        
    return (
        <div>
        <HeaderBar />
        <Container className={classes.container}>
            <Row>
                <Col md={4} className={classes.statscontainer}>
                    stats
                </Col>
                <Col md={{span: 8}}className={classes.orderscontainer}>
                    <Row>
                        {props.orders.length>=1?renderUncompletedOrders(): ''}
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
  };

  const mapStateToProps =(state) => {
	return {
        orders: state.orderList
    }
}
   const mapDispatchToProps = {
       fetchOrders: fetchOrders
   }
  export default connect(mapStateToProps,mapDispatchToProps)(OrderBacklog);

  const useStyles = makeStyles({
    container: {
        backgroundColor: '#282828;',
        // height: '200vh',
        paddingRight: '5%',
        width: '100vw',
        maxWidth: '100vw'
    },
    orderscontainer: {
        // backgroundColor: 'white',
        // height: '100vh'
    },
    statscontainer: {
        height:'100vh'
    }
});