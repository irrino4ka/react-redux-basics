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
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
        // const id = 1;
        // const newArray = [...state.results];
        // newArray.splice(id, 1);

        const updatedArray = state.results.filter(result => result.id !== action.resId)
        return {
            ...state,
            results: updatedArray
            // results: newArray
            // results: state.results.concat({id: new Date(), value: state.counter})
            // results:  state.results.splice( state.results.findIndex((i) =>{
            //     return i.id === action.id;
            // }), 1)
        }
    }
    return state;
};

export default reducer;
