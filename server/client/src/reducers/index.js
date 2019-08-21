import { combineReducers } from 'redux';
import DrinksReducer from './DrinksReducer';
import CartReducer from './CartReducer'

const rootReducer = combineReducers({
    drinks: DrinksReducer,
    cart: CartReducer
})

export default rootReducer;