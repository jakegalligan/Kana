import {FETCH_ORDERS} from '../actions/types'

export default function (state=[], action) {
    switch (action.type) {
        case FETCH_ORDERS:
            let newState = [action.payload]
            return newState
        default:
            return state;
    }
}