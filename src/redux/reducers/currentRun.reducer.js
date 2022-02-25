const defaultRun = {id: '', start_timestamp: ''}

const currentRunReducer = (state = defaultRun, action) => {
    switch(action.type) {
        case 'SET_CURRENT_RUN':
            return action.payload;
        case 'CLEAR_CURRENT_RUN':
            return state = defaultRun;
        default:
            return state;
    }
}

export default currentRunReducer;