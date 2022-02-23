import * as counter from './constants';

// Set State
let initialState = {
    count: 0
}

// REDUCER
const counterReducer = (state = initialState, action) => {
    // Checking Action Type
    switch(action.type){
        case counter.INC: 
        return {
            ...state,
            count: state.count + action.value
        };
        case counter.DEC:
        return {
            count: state.count - action.value
        }
        default: 
        return state

    }
}

export default counterReducer;