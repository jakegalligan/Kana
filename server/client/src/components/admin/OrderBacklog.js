import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
import Order from './Order';
const socket = io.connect('http://localhost:8000')

const OrderBacklog = () => {
    const[orders,setOrders] = useState([])
    // listen for emissions from the server
        socket.on('list',(data) => {
        //create new array with current and most recent order in order to avoid direct data manipulation
        let newArray = [...orders, data]
        //add the new order to the array
        setOrders(newArray)
    })

    const renderUnClaimedOrders = () => {
        return orders.map(order => {
            // <UnclaimedOrder

            // >
            // </UnclaimedOrder>
        })
    }
        
    return (
        <div>
            <Order />
            Hi
        </div>
    )
  };

  export default OrderBacklog;