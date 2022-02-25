const currentTreatmentReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_CURRENT_TREATMENT':
            return action.payload;
        default:
            return state;
    }
}

export default currentTreatmentReducer;