const allTreatments = (state=[], action) => {
    switch(action.type) {
        case 'SET_ALL_TREATMENTS':
            return action.payload;
        default:
            return state;
    }
}

export default allTreatments;