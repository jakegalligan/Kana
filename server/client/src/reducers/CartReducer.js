import {ADD_TO_CART,INCREMENT_DRINK,DECREMENT_DRINK, FETCH_CART} from '../actions/types';

export default function (state = [], action) {
    switch (action.type) {
        //if the dispatch is addtocart create a new cart array and add the new drink to it
        case ADD_TO_CART:
            let isDrinkAlreadyInCart = findDrinkInCart(state, action.payload.name);
            console.log('test', isDrinkAlreadyInCart);
            //if the drink is already in the cart increment its quantity
            if (isDrinkAlreadyInCart) {
                console.log('in true')
                isDrinkAlreadyInCart.quantity ++;
                let newState = [...state];
                return newState;
            }
            //if the drink is not in the cart already add it to the cart and increment its cart by 1
            if (!isDrinkAlreadyInCart) {
                console.log('in false');
                let drink = Object.assign({}, action.payload);
                drink.quantity = 1;
                let newState = [...state, drink]
                return newState;
            }
   
        case INCREMENT_DRINK:
            //get the drink to be incremented in the cart
            let drinkToBeIncremented = findDrinkInCart(state, action.payload)
            //if the drink to be incremented is in the cart  increase its quantity by 1
            if (drinkToBeIncremented) {
                drinkToBeIncremented.quantity++;
                let newState = [...state];
                return newState
            }
        case DECREMENT_DRINK:
            //get the drink to be decremented in the cart
            let drinkToBeDecremented=findDrinkInCart(state,action.payload);
            //if the drink to be incremented is in the cart decrease its quantity by 1
            if (drinkToBeDecremented) {
                drinkToBeDecremented.quantity --;
            }
            let newState = [...state];
            return newState;
        case FETCH_CART:
            let cart = [...state]
            return cart;
        //otherwise return the current state
        default:
            return state;
    }
}

//helper function that finds the match for the drink
//takes in a cart array and a drink to be matched with
const findDrinkInCart = (cart, drink) => {
    //find the drink in the cart that matches the name of the drink to be matched with
    let matchedItem = cart.find(cartItem => {
        console.log(cartItem.name);
        return cartItem.name == drink
    });
    console.log(matchedItem);
    return matchedItem;
}