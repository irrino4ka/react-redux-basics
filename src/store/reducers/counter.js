import * as actionTypes from '../actions';

const initState = {
    counter: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
        return {
            ...state,
            counter: state.counter + (action.value || 1)
        }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - (action.value || 1)
            }
    }
    return state;
};

export default reducer;
