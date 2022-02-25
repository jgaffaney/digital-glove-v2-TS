import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Digital Glove</h2>
      </Link>
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
              Main Menu
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/info">
          About
        </Link>
      </div>
    </div>
  );
}

export default Nav;