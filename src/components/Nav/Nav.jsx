import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import { Box, Grid } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);
  const currentRun = useSelector((store) => store.currentRun);

  return (
    <Box className="nav">
      <Grid container justifyContent='center'>
        <Grid item xs={6}>
          <Link to="/home">
            <h1 className="nav-title">Digital Glove</h1>
          </Link>
        </Grid>
        <div>
          {/* If no user is logged in, show these links */}
          {user.id === null &&
            // If there's no user, show login/registration links
            <Link className="navLink" to="/login">
              Login / Register
            </Link>
          }

          {/* If a user is logged in, show these links */}
          {user.id && (
            <>
              <Link className="navLink" to="/select">
                Home
              </Link>

              <Link className="navLink" to='/mainMenu'>
                TX Menu
              </Link>
              {(user.clearance_level >= 1) && (
                <>
                  <Link className='navLink' to='/customize'>
                    Settings
                  </Link>
                </>
              )}
              <LogOutButton className="navLink" />
            </>
          )}


          <Link className="navLink" to="/info">
            About
          </Link>
        </div>

      </Grid>
    </Box>
  );
}

export default Nav;
