import {ADD_NUMBER} from '../actions/types'

export default function (state = '', action) {
    switch (action.type) {
        case ADD_NUMBER:
            let newState = action.payload;
            return newState;
        default:
            return state;
    }
}