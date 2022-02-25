import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import MobileRunTableRow from '../MobileRunTableRow/MobileRunTableRow';
import { Table, TableBody, TableContainer, TableCell, TableRow, TableHead, Paper } from '@mui/material'

function MobileCallReviewPage() {

    // declare hook functions
    const dispatch = useDispatch();

    // get info from store
    const runs = useSelector(store => store.run);
    const user = useSelector(store => store.user);


    useEffect(() => {
        dispatch({ type: 'FETCH_USER_RUNS', payload: user })
    }, [])

    console.log('runs: ', runs);
    return (
        <div>
            <h1>Mobile Call Review</h1>
            <TableContainer component={Paper}>
                <Table width='90%' aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell width='20%' align="center">Run Number</TableCell>
                            <TableCell width='20%' align="center">Start Date/Time</TableCell>
                            <TableCell width='20%' align="center"></TableCell>
                            <TableCell width='20%' align="center"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {runs?.map(run => (
                            <MobileRunTableRow key={run.id} run={run} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default MobileCallReviewPage;