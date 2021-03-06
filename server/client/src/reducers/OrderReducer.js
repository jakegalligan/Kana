import {SUBMIT_ORDER} from '../actions/types'

export default function (state={}, action) {
    switch (action.type) {
        case SUBMIT_ORDER:
            let newState = Object.assign({...state}, action.payload)
            return newState
        default:
            return state;
    }
}