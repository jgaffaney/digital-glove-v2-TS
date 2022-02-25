import { TableCell, TableRow, Button } from '@mui/material';
import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';

function MobileRunDetailsItem({ item }) {
    

    const dispatch = useDispatch();
    const history = useHistory();

    const runID = {id: useParams()};

    const run = useSelector(store=>store.run)
    console.log('run in mrdi: ', run);
    console.log('runID in mrdi: ', runID);


    const handleEdit = () => {
        console.log('Edit Clicked with item: ', item);
        dispatch({type: 'FETCH_CURRENT_TREATMENT', payload: item, history: history})
    }

    const handleDelete = () => {
        console.log('Delete Clicked');
        dispatch({type: 'DELETE_TREATMENT', payload: item.id, run: run[0], runID: runID.id.run, history: history})
    }

    const dtEvent = DateTime.fromISO(item.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

    // console.log('item in mobilerundetailsitem: ', item);
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell width='75px' align="center">{item.procedure}</TableCell>
            <TableCell width='75px' align="center">{dtEvent}</TableCell>
            <TableCell width='75px'><Button onClick={handleEdit}>Edit</Button></TableCell>
            <TableCell width='75px'><Button onClick={handleDelete}>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunDetailsItem;