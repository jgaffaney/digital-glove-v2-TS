const treatmentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_TREATMENTS':
            return action.payload;
        default:
            return state;
    }
}

export default treatmentsReducer;