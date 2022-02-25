import { Button, Box, Grid } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EndCallButton from '../EndCallButton/EndCallButton';

function SelectMode() {

    // grab currentRun from store
    const currentRun = useSelector(store => store.currentRun);

    // declare hook functions
    const history = useHistory();
    const dispatch = useDispatch();

    // start a new call
    const handleNew = () => {
        console.log('clicked');
        history.push('/newCall')
    }

    const handleReview = () => {
        history.push('/mobileReview')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_CURRENT_RUN' })
    })

    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container columnSpacing={{ xs: 6 }} sx={{ justifyContent: 'center', flexDirection: 'column' }}>

                    {currentRun > 0 ?
                        (<>
                            <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                                <EndCallButton />
                            </Grid>

                            <br />
                            <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                                <Button
                                    sx={{ width: '200px', height: '75px', mt: '4%', mb: '4%' }}
                                    onClick={() => history.push('/mainMenu')} variant='contained' >
                                    Main Menu
                                </Button>
                            </Grid>
                        </>
                        ) : (
                            <>
                                <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                                    <Button
                                        sx={{ width: '200px', height: '75px', mt: '4%', mb: '4%' }}
                                        onClick={handleNew}
                                        variant='contained'
                                    >
                                        NEW CALL
                                    </Button>
                                </Grid>
                            </>
                        )
                    }
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <Button
                            sx={{ width: '200px', height: '75px', mt: '4%', mb: '4%' }}
                            variant='contained'
                            onClick={handleReview}
                        >
                            Review Previous Calls
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default SelectMode;