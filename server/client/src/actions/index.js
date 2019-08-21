import axios from 'axios'
import {FETCH_DRINKS, ADD_TO_CART, SUBMIT_ORDER, ADD_NAME, ADD_NUMBER} from '../actions/types'

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
    axios.post(`${ROOT_URL}/order`, order)
    .then(response => {
        console.log('in')
        dispatch({type: SUBMIT_ORDER, payload: response.data})
    })
    .catch (error => {
        console.log(error);
    })
}

export const setName = (name) => {
    return {
        type: ADD_NAME,
        payload: name
    }
} 

export const setNumber = (number) => {
    return {
        type: ADD_NAME,
        payload: number
    }
} 
 