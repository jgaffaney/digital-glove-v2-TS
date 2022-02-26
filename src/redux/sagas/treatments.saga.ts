import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { Treatment, AddTxEvent, FetchTx, FetchCurrentTX, DeleteTx, EditTx } from '../types/types';

function* fetchTreatments(action: FetchTx) {
    const category = action.payload.toLowerCase();
    
    try {
        const response: {data: Treatment[]} = yield axios.get(`/api/treatments/${category}`);
        console.log('fetch treatments response: ', response.data);
        
        yield put({type: 'SET_TREATMENTS', payload: response.data});
    } catch (error) {
        console.log('Error on fetchTreatments: ', error);
        
    }
}

function* addTxEvent(action: AddTxEvent) {
    console.log('action in addTxEvent: ', action);
    
    try {
        yield axios.post(`/api/treatments/${action.treatment.id}`, {run_id: action.payload.id})
        yield put({type: 'FETCH_RUN_DETAILS', payload: action.payload})
    } catch (error) {
        console.log('Error on addTxEvent: ', error);
        
    }
}

function* fetchCurrentTreatment(action: FetchCurrentTX) {
    console.log('in fetchCurrentTx saga with action: ', action);
    try {
        const response: {data: Treatment[]} = yield axios.get(`/api/treatments/current/${action.payload.id}`)
        yield put({type: 'SET_CURRENT_TREATMENT', payload: response.data[0]})
        action.history.push(`/treatmentReview/${action.payload.id}`)
    } catch (error) {
        console.log('Error in fetchCurrentTreatment: ', error);
    }
}

function* deleteTreatment(action: DeleteTx) {
    console.log('action in deleteTx: ', action);
    
    try {
        yield axios.delete(`/api/treatments/${action.payload}`)
        yield put({type: 'FETCH_RUN_DETAILS', payload: action.run, history: action.history})
    } catch (error) {
        console.log('Error on deleteTreatment: ', error);
        
    }
}

function* fetchAllTreatments() {
    try {
        const response: {data: Treatment[]} = yield axios.get('api/treatments/all')
        yield put({type: 'SET_ALL_TREATMENTS', payload: response.data});
    } catch (error) {
        console.log('Error on fetchAllTreatments: ', error);
    }
}

function* editTreatment(action: EditTx) {
    console.log('action in edit treatment: ',  action);
    try {
            yield axios.put(`api/treatments/${action.payload.id}`, {treatment: action.payload});
    } catch (error) {
        console.log('Error on editTreatment: ', error);
    }
}

function* treatmentsSaga() {
    yield takeLatest('FETCH_TREATMENTS', fetchTreatments)
    yield takeLatest('ADD_TX_EVENT', addTxEvent)
    yield takeLatest('FETCH_CURRENT_TREATMENT', fetchCurrentTreatment);
    yield takeLatest('DELETE_TREATMENT', deleteTreatment)
    yield takeLatest('FETCH_ALL_TREATMENTS', fetchAllTreatments)
    yield takeLatest('EDIT_TX', editTreatment)
}

export default treatmentsSaga;