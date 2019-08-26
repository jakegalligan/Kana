import { combineReducers } from 'redux';
import DrinksReducer from './DrinksReducer';
import CartReducer from './CartReducer';
import OrderReducer from './OrderReducer';
import NameReducer from './NameReducer.js';
import NumberReducer from './NumberReducer';
import OrderListReducer from './OrderListReducer';
import AddItemReducer from './AddItemReducer'

const rootReducer = combineReducers({
    drinks: DrinksReducer,
    cart: CartReducer,
    order: OrderReducer,
    name: NameReducer,
    number: NumberReducer,
    orderList: OrderListReducer,
    addItem: AddItemReducer
})

export default rootReducer;