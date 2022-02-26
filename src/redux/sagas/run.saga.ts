import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { IRun } from '../models/IRun';
import { BeginRun, DeleteRun, FetchRun, Run } from '../types/types';


const postRun = (action: BeginRun): any => {
    axios.post<IRun>('/api/run/begin', action)
};

const getRun = (action: BeginRun): any => {
    axios.get(`/api/run/${action.payload.id}`)
}



function* beginRun(action: BeginRun) {
    try{
        console.log('action in beginRun: ', action);
        console.log('action.payload.id: ', action.payload);
        
        const currentRun: {data: {rows: Run[]}} = yield axios.post('/api/run/begin', action.payload);
        console.log('currentRun id in beginRun: ', currentRun.data.rows[0]);
        yield axios.put('/api/run/currentRun', {run: currentRun.data.rows[0]})
        yield put({type: 'SET_CURRENT_RUN', payload: currentRun.data.rows[0]})
        const response: {data: Run[]} = yield axios.get(`/api/run/${action.payload.id}`)
        console.log('response.data: ', response.data);
        yield put({type: 'SET_RUNS', payload: response.data})
        action.history.push('/mainMenu')
    }catch (err) {
        console.log('Error on beginRun: ', err);
    }
}

function* fetchUserRuns(action: BeginRun): any {
    try{
        const response = yield axios.get(`/api/run/${action.payload.id}`)
        yield put({type: 'SET_RUNS', payload: response.data})
    } catch (err) {
        console.log('Error in fetchUserRuns: ', err);
    }
}

function* deleteRun(action: DeleteRun) {
    try{
        yield axios.delete(`/api/run/${action.payload}`)
        yield put({type: 'FETCH_USER_RUNS', payload: action.user})
    } catch (err) {
        console.log('Error on delete: ', err);
        
    }
}

function* fetchCurrentRun(): any {
    try {
        const response = yield axios.get<IRun>('/api/run/currentRun');
        console.log('response in fetchCurrentRun: ', response);
        
        yield put({type: 'SET_CURRENT_RUN', payload: response.data})
    } catch (error) {
        console.log('Error on fetchCurrentRun: ', error);
    }
}

function* fetchRunDetails(action: FetchRun): any {
    console.log('action in fetchRunDetails: ', action);
    
    try {
        const response = yield axios.get(`/api/run/details/${action.payload.id}`)
        yield put({type: 'SET_RUN_DETAILS', payload: response.data});
            action.history?.push(`/mobileReview/${action.payload.id}`);
        
    } catch (error) {
        console.log('Error on fetchRunDetails: ', error);
        
    }
}


function* endCall(action: FetchRun) {
    console.log('action in endCall: ', action);
    
    try {
        yield axios.put(`/api/run/${action.payload.id}`);
        yield put({type: 'CLEAR_CURRENT_RUN'})
        action.history.push('/select');
    } catch (error) {
        console.log('Error on endCall: ', error);
    }
}

function* runSaga() {
    yield takeLatest('BEGIN_RUN', beginRun);
    yield takeLatest('FETCH_USER_RUNS', fetchUserRuns);
    yield takeLatest('DELETE_RUN', deleteRun);
    yield takeLatest('FETCH_CURRENT_RUN', fetchCurrentRun)
    yield takeLatest('FETCH_RUN_DETAILS', fetchRunDetails)
    // yield takeLatest('FETCH_EDIT_RUN', fetchEditRun)
    yield takeLatest('END_CALL', endCall)
    // yield takeLatest('REFRESH_RUN_DETAILS', refreshRunDetails)
}

export default runSaga;