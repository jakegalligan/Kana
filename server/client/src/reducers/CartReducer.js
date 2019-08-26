import {ADD_TO_CART,INCREMENT_DRINK,DECREMENT_DRINK, FETCH_CART} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        //if the dispatch is addtocart create a new cart array and add the new drink to it
        case ADD_TO_CART:
            let drink = Object.assign({}, action.payload)
            //loop through the current state and see if any of the drinks in the cart match the drink to be added
            for (let i =0; i < state.length; i++) {
                //if so increment the quantity of the drink and return state
                if (state[i].name == drink.name) {
                    state[i].quantity ++;
                    return state;
                }
            }
            //if not add the drink to the cart
            drink.quantity = 1;
            let newCart = [...state, drink]
            return newCart
        //if type is increment drink find the drink and increase its quantity by 1
        //if drink isn't in cart throw error
        case INCREMENT_DRINK:
            for (let i = 0; i< state.length; i++) {
                if (state[i].name = action.payload) {
                    state[i].quantity ++;
                }
            }
            let newState1=[...state];
            return newState1;
        case DECREMENT_DRINK:
        //if type is decrement drink find drink and decrease its quantity by 1
            for (let i = 0; i< state.length; i++) {
                if (state[i].name = action.payload) {
                    state[i].quantity --;
                        //if the quantity of the drink is 0 remove it from the cart
                        if (state[i].quantity == 0) {
                            state.splice(i,1);
                        }
                }
            }
            let newState2 = [...state];
            return newState2;
        case FETCH_CART:
            let newState3 = [...state]
            return newState3;
        //otherwise return the current state
        default:
            return state;
    }
}