import { Event, RunsActions } from '../types/types';

const initialState: Event[] = [];

const runDetails = (state = initialState, action: RunsActions) => {
    switch(action.type) {
        case('SET_RUN_DETAILS'):
            return action.payload
        default:
            return state;
    }
}

export default runDetails;