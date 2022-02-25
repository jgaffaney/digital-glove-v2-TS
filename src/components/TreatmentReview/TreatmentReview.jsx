import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FormControl, TextField, Select, InputLabel, MenuItem, Box, 
            NativeSelect, Button, Divider, Dialog, DialogActions, DialogContent,
            DialogContentText, DialogTitle } from '@mui/material';
import { DateTime } from 'luxon';

function TreatmentReview() {

    const dispatch = useDispatch();

    const treatment = useSelector(store => store.currentTreatment);
    const allTreatments = useSelector(store => store.allTreatments);

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

    const defaultTime = `${DateTime.fromISO(treatment.timestamp).toLocaleString(DateTime.TIME_24_WITH_SECONDS)}`


    const airway = sortTreatments('airway');
    const chest = sortTreatments('chest');
    const access = sortTreatments('access');
    const medication = sortTreatments('medication');

    console.log('date from treatment: ', DateTime.fromISO(treatment.timestamp).toISODate());

    const [newTxDetails, setNewTxDetails] = useState(treatment);

    const handleTimeChange = (time) => {
        console.log('time in timechange: ', time);
        console.log('fromFormat: ', DateTime.fromFormat());
        const date = DateTime.fromISO(treatment.timestamp).toISODate();
        // const time = 
    }

    const handleSubmit = () => {
        dispatch({type: 'EDIT_TX', payload: treatment })
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_ALL_TREATMENTS' })
    }, [])
    console.log('tx review tx,start_timestamp: ', defaultTime)

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
                    // id='treatment-select'
                    defaultValue={defaultID}
                    label='Treatment'
                    onChange={(event)=> setNewTxDetails({...newTxDetails, procedure: event.target.value})}
                >
                    {/* <option aria-label={treatment.procedure} value={treatment.id} /> */}
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
                    <optgroup label='Medication'>
                        {medication.map(tx => (
                            <option key={tx.id} value={tx.id}>{tx.procedure}</option>
                        ))}
                    </optgroup>
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
                    onChange={()=>handleTimeChange(event.target.value)}
                />
                <br /><br />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{m:'auto', width: '60%'}}
                >
                    Submit
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