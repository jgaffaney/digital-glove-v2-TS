import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <p>Digital Glove is an easy to user interface to log timestamps of treatment events by paramedics during the course of a cardiac arrest</p>
      <br />
      <p>Digital Glove seeks to improve accuracy of data collection to improve research and patient outcomes in cardiac arrest.</p>
    </div>
  );
}

export default InfoPage;
