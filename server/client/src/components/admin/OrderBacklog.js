import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';
 const socket = io.connect('http://localhost:8000')
 const hi = 'hi';
// socket.on('list',(data) => {
//     console.log('hit backlog');

//create new array with current and most recent order in order to avoid direct data manipulation
// let newArray = [...orders, data]
// //add the new order to the array
// console.log(newArray);
// setOrders(newArray)
// })


const OrderBacklog = () => {
//     socket.on('list',(data) => {
//         console.log('in list')
//         console.log(data)
// })
// /create state which holds all the orders

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