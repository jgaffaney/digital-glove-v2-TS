import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormControl, TextField, Select, InputLabel, MenuItem, Box, 
            NativeSelect, Button, Divider } from '@mui/material';
import { DateTime } from 'luxon';

function TreatmentReview() {

    const dispatch = useDispatch();
    const history = useHistory();

    const treatment = useSelector(store => store.currentTreatment);
    const allTreatments = useSelector(store => store.allTreatments);
    const runID = useParams();

    const sortTreatments = (category) => {
        console.log('in sortTreatments');
        let resultArray = [];
        for (let tx of allTreatments) {
            if (tx.category == category) {
                resultArray.push(tx);
            }
        }
        return resultArray;
    }

    const findID = () => {
        for (let tx of allTreatments) {
            if (tx.procedure == treatment.procedure) {
                return tx.id
            }
        }
    }

    const defaultID = findID();
    console.log('defaultID in TR: ', defaultID);

    const defaultTime = `${DateTime.fromISO(treatment.timestamp).toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`


    const airway = sortTreatments('airway');
    const chest = sortTreatments('chest');
    const access = sortTreatments('access');
    const medication = sortTreatments('medication');

    // console.log('tx.id from airway[0]: ', airway[0].id);

    console.log('date from treatment: ', DateTime.fromISO(treatment.timestamp).toISODate());

    const [newTxDetails, setNewTxDetails] = useState(treatment);

    const handleTimeChange = (time) => {
        console.log('time in timechange: ', time);
        // console.log('fromFormat: ', DateTime.fromFormat());
        const date = DateTime.fromISO(treatment.timestamp).toISODate();
        const newTime = date + ' ' + time;
        console.log('newTime: ', newTime);
        setNewTxDetails({...newTxDetails, timestamp: newTime})
    }

    const handleSubmit = () => {
        console.log('in handleSubmit procedure: ', newTxDetails.procedure);
        console.log('typeof test: ', (typeof(newTxDetails.procedure) == 'string'));
        if(typeof(newTxDetails.procedure) == 'string') {
            console.log('typeof evaluated to true');
            console.log('defaultID in if block: ', defaultID);
            setNewTxDetails({...treatment, procedure: defaultID})
            console.log('newTxDets after set in if block: ', newTxDetails);
        }
        console.log('newTxDetails: ', newTxDetails);
        dispatch({type: 'EDIT_TX', payload: newTxDetails })
        history.goBack();
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_TREATMENTS' })
        dispatch({type: 'FETCH_RUN_DETAILS', payload: runID})
    }, [])
    console.log('tx review tx, timestamp: ', defaultTime)

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel htmlFor='treatment-select'></InputLabel>
                <NativeSelect
                sx={{width: '50%', m:'auto'}}
                    inputProps={{
                        name: 'treatment',
                        id: 'uncontrolled-native'
                    }}
                    defaultValue={defaultID}
                    label='Treatment'
                    onChange={(event)=> setNewTxDetails({...newTxDetails, event_id: event.target.value})}
                >
                    <>
                    <optgroup label='Airway'>
                        {airway.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <Divider />
                    <optgroup label='Chest'>
                        {chest.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <Divider />
                    <optgroup label='Access'>
                        {access.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    <Divider />
                    <optgroup label='Medication'>
                        {medication.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
                    </>
                </NativeSelect>
                <br /> <br />
                <TextField
                    id="time"
                    label="Time"
                    type="time"
                    defaultValue={defaultTime}
                    views={['hours', 'minutes', 'seconds']}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    inputProps={{
                        step: 60, // 1 min
                    }}
                    sx={{ width: 175, m: 'auto' }}
                    onChange={(event)=>handleTimeChange(event.target.value)}
                />
                <br /><br />
                <Button
                    onClick={handleSubmit}
                    variant='contained'
                    sx={{m:'auto', width: '60%'}}
                >
                    Submit
                </Button>
                <Button 
                    variant='contained' 
                    color='error' 
                    onClick={() => history.goBack()}
                    sx={{m:'auto', width: '60%'}}
                >
                    Cancel
                </Button>
            </FormControl>
        </Box>
    )

    // <FormControl>

    //     <TextField onChange={(e)=> {setNewTxDetails({...treatment, procedure: e.target.value})}}value={newTxDetails.procedure} id='procedure' label='Procedure' />
    //     <TextField value={DateTime.fromISO(newTxDetails.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)} id='timestamp' label="Time" />
    // </FormControl>

}

export default TreatmentReview;