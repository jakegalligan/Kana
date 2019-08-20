import { combineReducers } from 'redux';
import DrinksReducer from './DrinksReducer';

const rootReducer = combineReducers({
    drinks: DrinksReducer
})

export default rootReducer;