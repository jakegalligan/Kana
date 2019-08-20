import axios from 'axios'
import {FETCH_DRINKS} from '../actions/types'

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

 