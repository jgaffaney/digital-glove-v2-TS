import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';


// a reusable component to create a treatment button.  
// pass in a treatment with at least id and name

function TreatmentButton({ treatment }) {
    console.log('tx in txbtn: ', treatment);

    const dispatch = useDispatch();
    const run = useSelector(store=>store.currentRun)

    // click handler
    const handleClick = () => {
        console.log(treatment.procedure.toLowerCase(), ' clicked');
        dispatch({type: 'ADD_TX_EVENT', payload: treatment, run: run})
    }


    return (
        <div>
            <Button
                sx={{ width: '130px', height: '60px', justifyContent: '',}}
                variant='contained'
                onClick={handleClick}>{treatment.procedure}</Button>
        </div>
    )
}

export default TreatmentButton;