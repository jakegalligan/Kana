import {ADD_NUMBER} from '../actions/types'

export default function (state = 0, action) {
    switch (action.type) {
        case ADD_NUMBER:
            let newState = action.payload;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}