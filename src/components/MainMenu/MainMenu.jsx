import { Button, Box, Grid } from '@mui/material';
import EndCallButton from '../EndCallButton/EndCallButton';
import MainMenuButton from '../MainMenuButton/MainMenuButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RunningTimer from '../RunningTimer/RunningTimer';
import CurrentTime from '../CurrentTime/CurrentTime';

function MainMenu() {

        const history = useHistory();

        const currentRun = useSelector(store=>store.currentRun)

    if(currentRun.id > 0) {
       return (
        <div>
            <>
            <RunningTimer />
            <CurrentTime />
            <Box sx={{ flexGrow: 1, m: 'auto' }}>
                <Grid container columnSpacing={{ xs: 6 }} sx={{ justifyContent: 'center', flexDirection: 'column' }}>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Airway' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Chest' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Access' />
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <MainMenuButton category='Medication' />
                    </Grid>
                    <br /><br />
                    <Grid sx={{ justifyContent: 'center', m: 'auto' }} item xs={10}>
                        <EndCallButton />
                    </Grid>
                </Grid>
            </Box>
            <br /><br />
            </>



        </div>
    )
} else {
    // history.push('/home')

    return(
        <h1>You do not have an open run at this time</h1>
    )
} 
    }

    

export default MainMenu;