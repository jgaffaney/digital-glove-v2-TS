import { TableRow, TableCell, Button } from '@mui/material';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { DateTime } from 'luxon';
import { confirm } from 'react-confirm-box';

function MobileRunTableRow({run}) {

    // define hook functions
    const dispatch = useDispatch();
    const history = useHistory();

    //get user from store
    const user = useSelector(store=>store.user)

    // convert SQL date to readable toLocaleString(DateTime.DATETIME_SHORT)
    const dtStart = DateTime.fromISO(run.start_timestamp).toLocaleString(DateTime.DATETIME_SHORT);

    const MySwal = withReactContent(Swal);

    // delete function with sweetalert confirmation
    const handleDelete = async () => {
        // const options = {labels: {confirmable: 'OK'}}
        // const result = await confirm("This will delete your run and cannot be reversed.  Are you sure?");
        // if(result) {
        //     dispatch({type: 'DELETE_RUN', payload: run.id, user})
        //     confirm('Your run has been deleted', options)
        // } else {
        //     confirm('Your run has been saved', options);
        // }

        MySwal.fire({
            title: <p>This will delete your run and cannot be reversed.  Are you sure?</p>,
            showConfirmButton: true,
            showCancelButton: true,
            icon: 'warning',
        }).then((result) => {
            if(result.isConfirmed) {
                dispatch({type: 'DELETE_RUN', payload: run.id, user})
                MySwal.fire('Your run has been deleted')
            } else {
                MySwal.fire('Your run has been saved')
            }
        })
    }

    const handleEdit = () => {
        dispatch({type: 'FETCH_RUN_DETAILS', payload: run.id, history: history})
    }
    
    return(
        <TableRow 
        key={run.id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell width='20%' align="center">{run.id}</TableCell>
            <TableCell width='20%' align="center">{dtStart}</TableCell>
            <TableCell width='15%'><Button onClick={handleEdit}>Edit / View</Button></TableCell>
            <TableCell width='15%'><Button onClick={handleDelete}>Delete</Button></TableCell>
        </TableRow>
    )
}

export default MobileRunTableRow;