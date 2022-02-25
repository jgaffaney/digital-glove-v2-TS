import { User, UserActions } from '../types/types';

const initialState: User = {
  access: [],
  airway: [], 
  chest: [], 
  medication: [],
  clearance_level: 0,
  id: 0,
  username: ''
}

const userReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'UNSET_USER':
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
