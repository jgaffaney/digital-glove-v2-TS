const runReducer = (state = [], action) => {
    switch(action.type) {
        case 'SET_RUNS':
            return action.payload;
        default:
            return state;
    }
}

export default runReducer;