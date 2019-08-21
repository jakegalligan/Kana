import {ADD_TO_CART,INCREMENT_DRINK,DECREMENT_DRINK} from '../actions/types';

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
                    console.log(state);
                    return state;
                }
            }
            //if not add the drink to the cart
            drink.quantity = 1;
            let newCart = [...state, drink]
            console.log(newCart);
            return newCart
        //if type is increment drink find the drink and increase its quantity by 1
        //if drink isn't in cart throw error

        //if type is decrement drink find drink and decrease its quantity by 1
        //otherwise return the current state
        default:
            return state;
    }
}