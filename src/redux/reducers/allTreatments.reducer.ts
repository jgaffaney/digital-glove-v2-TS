import { Treatment, TreatmentsActions } from '../types/types';

const initialState: Treatment[] = [];

const allTreatments = (state = initialState, action: TreatmentsActions) => {
    switch(action.type) {
        case 'SET_ALL_TREATMENTS':
            return action.payload;
        default:
            return state;
    }
}

export default allTreatments;