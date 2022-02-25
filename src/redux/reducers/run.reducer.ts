import { Run, RunsActions } from '../types/types';

const initialState: Run[] = [];

const runReducer = (state = initialState, action: RunsActions) => {
    switch(action.type) {
        case 'SET_RUNS':
            return action.payload;
        default:
            return state;
    }
}

export default runReducer;