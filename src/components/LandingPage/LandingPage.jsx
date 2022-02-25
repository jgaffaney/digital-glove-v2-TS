import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_12">
          <p>
            Have you ever thrown away the glove that you wrote your treatments or vitals on?  This application 
            has the answer for you.  Using Digital Glove allows you to easily record timestamps for treatment 
            events during a cardiac arrest.  This will aid in patient care report completion and increase
            accuracy of data collection.
          </p>
        </div> 
        <div className="grid-col grid-col_12">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
