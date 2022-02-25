import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { useEffect } from 'react';


// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment, displayLast }) {

    // declare hook functions
    const dispatch = useDispatch();

    // grab data from the store
    const run = useSelector(store => store.currentRun)
    const runDetails = useSelector(store => store.runDetails)

    // click handler
    const handleClick = () => {
        console.log(treatment.procedure.toLowerCase(), ' clicked');
        dispatch({ type: 'ADD_TX_EVENT', payload: run, treatment: treatment })
    }

    // a function to find the last time this treatment was given
    const findLast = () => {
        console.log('in findLast');
        let last = '';
        runDetails.slice(0).reverse().map(tx => {
            // console.log('tx.pro in runDetails.mp: ', tx.procedure.toLowerCase())
            // console.log('treatment.pro in rundetails.map: ', treatment.procedure.toLowerCase());
            if (tx.procedure.toLowerCase() == treatment.procedure.toLowerCase()) {
                console.log('if to true');
                last = DateTime.fromISO(tx.timestamp).toLocaleString(DateTime.TIME_WITH_SECONDS)
            }
            console.log('last in findLast for ', tx.procedure, ' :', last);
        });
        return last;
    }
    const lastEvent = findLast();

    // make sure runDetails is always fresh
    useEffect(() => {
        dispatch({ type: 'FETCH_RUN_DETAILS', payload: run })
        // findLast();
    }, []);
    // console.log('lastEvent: ', lastEvent);
    console.log('displayLast: ', displayLast);
    return (
        <div>
            <Button
                sx={{ width: '130px', height: '60px', justifyContent: '', }}
                variant='contained'
                onClick={handleClick}>{treatment.procedure}
            </Button>
            {displayLast &&
                <p>Last: {lastEvent}</p>
            }
        </div>
    )
}

export default TreatmentButton;