import { combineReducers } from 'redux';
import DrinksReducer from './DrinksReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer'

const rootReducer = combineReducers({
    drinks: DrinksReducer,
    cart: CartReducer,
    order: OrderReducer
})

export default rootReducer;