import {FETCH_DRINKS} from '../actions/types';

export default function (state=[], action) {
    switch(action.type) {
        case FETCH_DRINKS:
            return action.payload;
        default:
            return state;
    }
}