import {ADD_NAME} from '../actions/types'

export default function (state = '', action) {
    switch (action.type) {
        case ADD_NAME:
            let newState = action.payload;
            console.log(newState);
            return newState;
        default:
            return state;
    }
}