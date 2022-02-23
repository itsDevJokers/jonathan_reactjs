import * as counter from './constants';

// Increment
export const increment = (value) => {
    return {
        type: counter.INC,
        value: value
    }
}

// Decrement
export const decrement = (value) => {
    return {
        type: counter.DEC,
        value: value
    }
}

// Condition Action
export const decrementWithCheckingAction = (value) => {
    return (dispatch, getState) => {
        if(getState().counter.count > 0){
            dispatch(decrement(value));
        }
    }
}