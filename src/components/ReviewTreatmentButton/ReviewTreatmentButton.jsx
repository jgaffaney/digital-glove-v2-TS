import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function ReviewTreatmentButton() {

    const history = useHistory();
    const dispatch = useDispatch();

    const run = useSelector(store=>store.currentRun)

    const handleClick = () => {
        console.log('Review TX clicked');
        dispatch({type: 'FETCH_RUN_DETAILS', payload: run.id, history: history})
    }

    return (
        <div>
            <Button variant='contained' onClick={handleClick}>Review Treatment</Button>
        </div>

    )
}

export default ReviewTreatmentButton;