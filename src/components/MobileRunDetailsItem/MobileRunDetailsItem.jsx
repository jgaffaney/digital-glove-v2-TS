import { TableCell, TableRow, Button } from '@mui/material';
import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router';

function MobileRunDetailsItem({ item }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const runID = useParams();


    const handleEdit = () => {
        console.log('Edit Clicked');
        dispatch({type: 'FETCH_CURRENT_TREATMENT', payload: item.id, history: history})
    }

    const handleDelete = () => {
        console.log('Delete Clicked');
        dispatch({type: 'DELETE_TREATMENT', payload: item.id, run: runID, history: history})
    }

    const dtEvent = DateTime.fromISO(item.timestamp).toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS);

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