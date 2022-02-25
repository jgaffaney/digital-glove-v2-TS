import { Link } from 'react-router-dom';
import { Stack, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  borderRadius: '0',
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: '#7f5539',
  width: '100%'
}));

function SubNavBar() {


    return (
        <div className='navBar'>
            <Stack direction='row' spacing={0} sx={{display:'flex', justifyContent: 'center', backgroundColor:'#f2f2f2' }}>
                <Item className='navBarLink'>
                    <Link to="/treatmentPage/Airway">
                        <p className='navBarLink'>AIRWAY</p>
                    </Link>
                </Item>
                <Item className='navBarLink'>
                    <Link to="/treatmentPage/Chest">
                        <p className='navBarLink'>CHEST</p>
                    </Link>
                </Item>
                <Item className='navBarLink'>
                    <Link to="/treatmentPage/Access">
                        <p className='navBarLink'>ACCESS</p>
                    </Link>
                </Item>
                <Item className='navBarLink'>
                    <Link to="/treatmentPage/Medication">
                        <p className='navBarLink'>MEDICATION</p>
                    </Link>
                </Item>
            </Stack>
        </div>

    )
}

export default SubNavBar;

