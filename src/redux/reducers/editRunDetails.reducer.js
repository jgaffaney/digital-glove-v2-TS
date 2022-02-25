const editRunDetail = (state = [], action) => {
    switch(action.type) {
        case 'SET_EDIT_RUN':
            return action.payload
        default:
            return state;
    }
}

export default editRunDetail;