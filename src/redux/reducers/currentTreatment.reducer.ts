import { Treatment, TreatmentsActions  } from "../types/types";

const initialState: Treatment = {
    id: 0,
    category: '',
    procedure: ''
}

const currentTreatmentReducer = (state: Treatment = initialState, action: TreatmentsActions) => {
    switch(action.type) {
        case 'SET_CURRENT_TREATMENT':
            return action.payload;
        default:
            return state;
    }
}

export default currentTreatmentReducer;