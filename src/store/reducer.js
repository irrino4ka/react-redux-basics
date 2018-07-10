const initState = {
    counter: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            counter: state.counter + (action.value || 1)
        }
        case 'DECREMENT':
            return {
                counter: state.counter - (action.value || 1)
            }
    }
    return state;
};

export default reducer;
