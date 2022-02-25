import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FormControl, TextField, textFieldClasses } from '@mui/material';
import { DateTime } from 'luxon';

function TreatmentReview() {

    const treatment = useSelector(store=>store.currentTreatment);

    const [newTxDetails, setNewTxDetails] = useState(treatment[0]);
    // const dtStart = DateTime.fromISO(run.start_timestamp).toLocaleString(DateTime.DATETIME_SHORT);

    // useEffect(()=>{
    //     setNewTxDetails(treatment)
    // }, [])
    return(
        <FormControl>
            <TextField onChange={(e)=> {setNewTxDetails({...treatment, procedure: e.target.value})}}value={newTxDetails.procedure} id='procedure' label='Procedure' />
            <TextField value={DateTime.fromISO(newTxDetails.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)} id='timestamp' label="Time" />
        </FormControl>
    )
}

export default TreatmentReview;