import {FETCH_ORDERS} from '../actions/types'

export default function (state=[], action) {
    switch (action.type) {
        case FETCH_ORDERS:
            let newState = [action.payload]
            console.log(newState);
            return newState
        default:
            return state;
    }
}