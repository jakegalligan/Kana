import {ADD_TO_CART} from '../actions/types';

export default function (cart = [], action) {
    switch (action.type) {
        //if the dispatch is addtocart create a new cart array and add the new drink to it
        case ADD_TO_CART:
            let newCart = [...cart, action.payload]
            return newCart;
        //otherwise return the current state
        default:
            return state;
    }
}