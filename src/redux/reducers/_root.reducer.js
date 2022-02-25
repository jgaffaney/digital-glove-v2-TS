import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import run from './run.reducer'
import treatments  from './treatments.reducer';
import currentRun from './currentRun.reducer';
// import currentDetails from './currentRunDetails.reducer';
import runDetails from './runDetails.reducer';
import currentTreatment from './currentTreatment.reducer';
import allTreatments from './allTreatments.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  run, // will hold all runs for logged in user
  treatments, // will hold all events available for use in the current category
  currentRun, // will hold the current run if there is one
  // currentDetails, // will hold all the details for the current run
  runDetails, // will hold all the details for the run being reviewed.
  currentTreatment, // will hold the current treatment being reviewed.
  allTreatments, // will hold all treatments for edit
});

export default rootReducer;
