import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
 const socket = io.connect('http://localhost:8000')

const OrderBacklog = () => {
    const[orders,setOrders] = useState([])
    // listen for emissions from the server
        socket.on('list',(data) => {
            console.log('hit backlog')
        //create new array with current and most recent order in order to avoid direct data manipulation
        let newArray = [...orders, data]
        //add the new order to the array
        console.log(newArray);
        setOrders(newArray)
        })

    
    return (
        <div>
            Hi
        </div>
    )
  };

  export default OrderBacklog;