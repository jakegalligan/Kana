import { combineReducers } from 'redux';
import DrinksReducer from './DrinksReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer';
import NameReducer from './NameReducer.js';
import NumberReducer from './NumberReducer';
import OrderListReducer from './OrderListReducer';

const rootReducer = combineReducers({
    drinks: DrinksReducer,
    cart: CartReducer,
    order: OrderReducer,
    name: NameReducer,
    number: NumberReducer,
    orderList: OrderListReducer
})

export default rootReducer;