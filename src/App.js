import React, { useState } from 'react';
import './App.css';


const yellow = 'greenyellow';

const styles = {
  backgroundColor: 'grey',
  border: 'red 1px solid',
  padding: '10px',
  para: {
    background: yellow
  }
};


const Scoring = ({ score }) => <p>Ocena:{score}</p>;
const Author = ({ author }) => <p>Autor:{author}</p>;

function News({ header, intro, author }) {
  const [score] = useState(7);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Author author={author} />
      <Scoring score={score} />
    </div>
  );
}



const data = [
  {
    id: 1, author: 'Jan Brzęczek', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział',
  }, {
    id: 2, author: 'Jan Brzęczek', title: 'Wszyscy zazdroszczą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie widział',
  }, {
    id: 3, author: 'Jan Brzęczek', title: 'Adam Małysz zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
  }
];

function App() {
  return (
    <div>
      {data.map((elem) => (
        <News
          key={`news-${elem.id}`}
          header={elem.title}
          intro={elem.intro}
          author={elem.author}
        />
      ))}
    </div>
  );
}


export default App;
