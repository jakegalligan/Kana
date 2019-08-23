import React, {useState, useEffect} from 'react';
import Order from './Order';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchOrders} from '../../actions';
import HeaderBar from '../shared/HeaderBar'



const OrderBacklog = (props) => {
    // on initial page load get orers
    useEffect(() => {
        //fetch newly added orders every second
        setInterval(()=>{props.fetchOrders()},1000);
        
    },[])
    //go throuhg all unCompleted orders in database and render them
    const renderUncompletedOrders = () => {
        return props.orders[0].map(individualOrder => {
            console.log('renderingtheprops');
            return (
            <Order
                order={individualOrder}
            ></Order>
            )
        })
    }
        
    return (
        <div>
        <HeaderBar />
        <Container>
            <Row>
                <Col>
                    stats
                </Col>
                <Col>
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

