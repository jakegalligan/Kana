import axios from 'axios'
import {FETCH_DRINKS, ADD_TO_CART, SUBMIT_ORDER, ADD_NAME, ADD_NUMBER, INCREMENT_DRINK, DECREMENT_DRINK} from '../actions/types'

const ROOT_URL = 'http://localhost:8000';

export const fetchDrinks = (category = '') => dispatch => {
    axios.get(`${ROOT_URL}/menu?category=${category}`)
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

export const submitOrder = (order) => dispatch => {
    console.log('hit action submit order')
    axios.post(`${ROOT_URL}/order`, order)
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

export const sendNotification = (number) => {
    console.log(number)
    let phoneNumberObj = {
        phoneNumber: number
    }
    axios.post(`${ROOT_URL}/order/notify`, phoneNumberObj)
    return {
        type: 'send_notif'
    }

}
 
 