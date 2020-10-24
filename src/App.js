import React, {Fragment} from 'react';
import './App.css';


function News({ header, intro }) {
  return (
    <div>
      <h2>{header}</h2>
      <p>{intro}</p>
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <News header="Nagłówek 1" intro="Intro 1" />
      <News header="Nagłówek 2:Breaking news" intro="Intro 2" />
      <News header="Nagłówek 3: Nie śpię, bo trzymam kredens" intro="Intro 3" />
    </Fragment>
  );
}


export default App;
