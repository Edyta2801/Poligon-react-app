import React from 'react';
import './App.css';

const DAY = 'monday';

function News({ header, intro }) {
  return (
    <div>
      <h2>{header}</h2>
      <p>{intro}</p>

    </div>
  );
}

function App() {
  const checkDay = () => {
    if (DAY == 'monday') {

      return (
        <div>
          {DAY}
          <News header="Nagłówek 1" intro="Intro 1" />
          <News header="Nagłówek 2:Breaking news" intro="Intro 2" />
          <News header="Nagłówek 3: Nie śpię, bo trzymam kredens" intro="Intro 3" />
        </div>
      );
    }
    return (
      <p>Nie ma newsów z poniedziałku</p>
    );
  };
  return (
    <div>
      {checkDay()}
    </div>
  );
}

export default App;
