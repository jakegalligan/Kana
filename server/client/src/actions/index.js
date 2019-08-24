import axios from 'axios'
import {FETCH_DRINKS, ADD_TO_CART, SUBMIT_ORDER,
     ADD_NAME, ADD_NUMBER, INCREMENT_DRINK, 
     DECREMENT_DRINK, SEND_NOTIFICATION, FETCH_ORDERS, CLAIM_DRINK,FETCH_CART} from '../actions/types'

const ROOT_URL = 'http://localhost:8000';

export const fetchDrinks = (category = '') => dispatch => {
    console.log('hit action')
    axios.get(`/menu?category=${category}`)
    .then(response => {
        dispatch({type: FETCH_DRINKS, payload: response.data})
    })
    .catch (error => {
        console.log(error);
    })
}

export const addToCart = (drink) => {
    return {
        type: ADD_TO_CART,
        payload: drink
    }
} 

export const getCart =() => {
    return {
        type: FETCH_CART
    }
}

export const submitOrder = (order) => dispatch => {
    console.log('hit action submit order')
    axios.post(`/order`, order)
    .then(response => {
        console.log('got response')
        dispatch({type: SUBMIT_ORDER, payload: response.data})
    })
    .catch (error => {
        console.log('eror')
        console.log(error);
    })
    console.log('skipped');
}

export const setName = (name) => {
    return {
        type: ADD_NAME,
        payload: name
    }
} 

export const setNumber = (number) => {
    return {
        type: ADD_NUMBER,
        payload: number
    }
} 

export const incrementDrink = (drink) => {
    console.log('hit', drink)
    return {
        type: INCREMENT_DRINK,
        payload: drink
    }
}

export const decrementDrink = (drink) => {
    return {
        type: DECREMENT_DRINK,
        payload: drink
    }
}

export const sendNotification = (number,name) => {
    console.log(number)
    console.log(name)
    let phoneNumberObj = {
        phoneNumber: number,
        customerName: name
    }
    axios.post(`/notify`, phoneNumberObj)
    return {
        type: SEND_NOTIFICATION
    }

}

export const fetchOrders = () => dispatch => {
    console.log('hit orders');
    axios.get(`/order`)
    .then(response => {
        dispatch({type: FETCH_ORDERS, payload: response.data})
    })
    .catch (error => {
        console.log(error);
    })
}

export const claimDrink = (drinkId) => dispatch => {
    let currentTime = new Date(); 
    axios.post(`/order/${drinkId}`,{isClaimed: true, timeOrderClaimed: currentTime} )
    .then(response => {
        dispatch({type: CLAIM_DRINK, payload: response.data})
    })
    .catch (error => {
        console.log(error);
    })
}

export const submitDrink = (drinkId) => dispatch => {
    let currentTime = new Date(); 
    axios.post(`/order/${drinkId}`,{isCompleted: true, timeOrderCompleted: currentTime} )
    .then(response => {
        dispatch({type: CLAIM_DRINK, payload: response.data})
    })
    .catch (error => {
        console.log(error);
    })
}
 
 