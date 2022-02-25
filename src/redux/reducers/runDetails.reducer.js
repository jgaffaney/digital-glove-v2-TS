const runDetails = (state = {}, action) => {
    switch(action.type) {
        case('SET_RUN_DETAILS'):
            return action.payload
        default:
            return state;
    }
}

export default runDetails;