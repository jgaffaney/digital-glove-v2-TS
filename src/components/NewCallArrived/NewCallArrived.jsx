import { Button, Grid, Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function NewCallArrived() {

    // declare hook functions
    const dispatch = useDispatch();
    const history = useHistory();

    // declare state variables
    const user = useSelector(store => store.user);

    // New Call Button function
    const handleNewCall = () => {
        console.log('user in handleNewCall: ', user);
        dispatch({ type: 'BEGIN_RUN', payload: user, history })
    }

    // if a call cancels or reassigns
    const handleCancel = () => {
        history.push('/select')
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container columnSpacing={{ xs: 6 }} sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <Button
                            sx={{ width: '200px', height: '75px', mt: '4%', mb: '4%' }}
                            variant="contained"
                            onClick={handleNewCall}>
                            AT PATIENT
                        </Button>
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <Button
                            sx={{ width: '200px', height: '75px', mt: '4%', mb: '4%' }}
                            variant='contained'
                            onClick={handleCancel}>
                            CANCELED / REASSIGNED
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>

    )
}

export default NewCallArrived;