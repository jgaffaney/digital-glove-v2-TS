import { useDispatch, useSelector } from 'react-redux';
import MobileRunDetailsItem from '../MobileRunDetailsItem/MobileRunDetailsItem';
import {
    TableContainer, Table, TableCell, TableHead,
    TableRow, TableBody, Paper, Box, Button
} from '@mui/material';
import { useHistory, useParams } from 'react-router';
import { useEffect } from 'react';


function MobileRunDetailsPage() {

    const dispatch = useDispatch();
    const history = useHistory();

    const run = useSelector(store => store.runDetails)
    const runNumber = useParams();
    console.log('runNumber: ', runNumber.run);

    // const findRun = () => {
    //     for(run of runs) {
    //         if(run.id == runNumber) {
    //             return run
    //         }
    //     }
    // }

    // const run = findRun();
    useEffect(()=> {
        dispatch({type: 'FETCH_RUN_DETAILS', payload: {id: runNumber.run}})
    }, [])

    return (
        <div>
            <h1>Run Details</h1>
                <Button onClick={() => history.goBack()}>BACK</Button>
                <TableContainer component={Paper}>
                    <Table width='90%' aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell width='75px' align="center">Treatment</TableCell>
                                <TableCell width='75px' align="center">TX Time</TableCell>
                                <TableCell width='75px' align="center"></TableCell>
                                <TableCell width='75px' align="center"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {run?.map((item, i) => (
                                <MobileRunDetailsItem key={i} item={item} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
        </div>
    )
}

export default MobileRunDetailsPage;