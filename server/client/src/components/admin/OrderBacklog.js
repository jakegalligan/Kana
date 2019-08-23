import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import Order from './Order';
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import {fetchOrders} from '../../actions'

// const socket = io.connect('http://localhost:8000');


const OrderBacklog = (props) => {
    // console.log(props);
    

    // const[liveOrders,setLiveOrders] = useState([])
    // // listen for emissions from the server
    //     socket.on('new order',(data) => {
    //     //create new array with current and most recent order in order to avoid direct data manipulation
    //     let newArray = [...liveOrders, data]
    //     //add the new order to the array
    //     setLiveOrders(newArray)
    // })

    // on initial page load get orers
    useEffect(() => {
        //fetch newly added orders every second
        // setInterval(()=>{props.fetchOrders()},1000);
        
    },[])
    // const renderOrders = () => {
    //     return liveOrders.map(individualOrder => {
    //         console.log(individualOrder);
    //         return(
    //             <Order
    //                 order={individualOrder}
    //             ></Order>
    //         )
    //     })
    // }

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
        <Container>
            <Row>
                <Col>
                    stats
                </Col>
                <Col>
                    <Row>
                        {/* {renderOrders()} */}
                        {props.orders.length>=1?renderUncompletedOrders(): ''}
                    </Row>
                </Col>
            </Row>
        </Container>
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

