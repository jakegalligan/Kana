import {FETCH_DRINKS} from '../actions/types';

export default function (state=[], action) {
    switch(action.type) {
        case FETCH_DRINKS:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}