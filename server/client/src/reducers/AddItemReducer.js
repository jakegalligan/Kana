import {ADD_ITEM} from '../actions/types'

export default function (state = 0, action) {
    switch (action.type) {
        case ADD_ITEM:
            let newState = state++;
            return newState;
        default:
            return state;
    }
}