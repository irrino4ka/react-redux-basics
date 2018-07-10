const initState = {
    counter: 0,
    results: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            ...state,
            counter: state.counter + (action.value || 1)
        }
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - (action.value || 1)
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
    }
    return state;
};

export default reducer;
