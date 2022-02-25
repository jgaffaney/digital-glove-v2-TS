import { Run, RunsActions } from '../types/types';

const defaultRun: Run = {id: 0, start_timestamp: '', end_timestamp: '', user_id: 0}

const currentRunReducer = (state = defaultRun, action: RunsActions) => {
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