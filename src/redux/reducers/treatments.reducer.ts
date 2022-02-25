import { Treatment, TreatmentsActions } from "../types/types";

const initialState: Treatment[] = []

const treatmentsReducer = (state = initialState, action: TreatmentsActions) => {
    switch (action.type) {
        case 'SET_TREATMENTS':
            return action.payload;
        default:
            return state;
    }
}

export default treatmentsReducer;