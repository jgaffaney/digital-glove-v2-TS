import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import TreatmentButton from '../TreatmentButton/TreatmentButton';
import { useEffect } from 'react';
import { Box, Grid, Button } from '@mui/material';
import ReviewTreatmentButton from '../ReviewTreatmentButton/ReviewTreatmentButton';
import EndCallButton from '../EndCallButton/EndCallButton';
import RunningTimer from '../RunningTimer/RunningTimer';
import CurrentTime from '../CurrentTime/CurrentTime';
import SubNavBar from '../Nav/SubNavBar';

function TreatmentPage() {

    // declare hook functions
    const history = useHistory();
    const dispatch = useDispatch();
    const category = useParams();
    console.log('cat in txpage: ', category.category);

    // grab events from store
    const treatments = useSelector(store => store.treatments)
    // const treatConfig = [14, 15, 16, 17, 43, 44, 45, 13, 24]
    const user = useSelector(store => store.user)
    const selectedCategory = `${category.category}`
    const userTreatments = user[selectedCategory.toLowerCase()]

    const setConfig = () => {
        console.log('selectedCategory in setConfig: ', selectedCategory);
        console.log('userTreatments in setConfig: ', userTreatments);
        console.log('treatments in setConfig: ', treatments);
        if (userTreatments) {
            let configArray = [];
            for (let button of userTreatments) {
                for (let tx of treatments) {
                    if (button == tx.id) {
                        configArray.push(tx)
                    }
                }
            }
            console.log('configArray: ', configArray);
            return configArray
        } else {
            return treatments;
        }
    }

    const txLayout = setConfig();
    console.log('configArray as txlayout is: ', txLayout);

    console.log('txs in txpage:', treatments);
    useEffect(() => {
        dispatch({type: 'FETCH_CURRENT_RUN'})
        dispatch({ type: 'FETCH_TREATMENTS', payload: category.category })
    }, [])

    const isMedication = () => {
        if (category.category == 'Medication') {
            return true
        } else {
            return false
        }
    }

    const isCustomLayout = () => {
        console.log('userTreatments: ', userTreatments);
        if(txLayout) {
            return userTreatments
        } else {
            return treatments;
        }
        
    }
    const treatmentLayout = isCustomLayout();

    return (
        <div>
            <SubNavBar />
            <RunningTimer />
            <CurrentTime />
            {/* <Box sx={{ flexGrow: 1, width: '100%', m:'1%' }}>
                <Button onClick={() => history.goBack()}>Back</Button>
            </Box> */}
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container spacing={1} sx={{ justifyContent: 'center', marginBottom: '6%' }}>
                    {txLayout.map(treatment => {
                        return (
                            <Grid key={treatment.id} item xs={5}>
                                <TreatmentButton displayLast={isMedication()} key={treatment.id} treatment={treatment} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container spacing={1} sx={{ justifyContent: 'center' }}>
                    <Grid sx={{ width: '130px', height: '60px', justifyContent: 'space-evenly', }} item xs={5}>
                        <ReviewTreatmentButton />
                    </Grid>
                    <Grid sx={{ width: '130px', height: '60px', justifyContent: 'space-evenly', }} item xs={5}>
                        <EndCallButton />
                    </Grid>
                </Grid>
            </Box>

        </div>
    )

}

export default TreatmentPage;