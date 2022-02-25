import { Button } from '@mui/material';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

function EndCallButton() {

    const history = useHistory();
    const dispatch = useDispatch();

    const run = useSelector(store=>store.currentRun)

    const handleClick = () => {
        console.log('End Call clicked');
        console.log('run in EndCallButton: ', run );

        dispatch({type: 'END_CALL', payload: run, history: history})
    }

    return (
        <Button
            sx={{ height: '60px', width: '130px' }}
            color='error'
            variant='contained'
            onClick={handleClick}
        >
            End Call
        </Button>
    )
}

export default EndCallButton;