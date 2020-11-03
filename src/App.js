import React from 'react';

import './App.css';
import News from './pages/Articles.js';
import Header from './components/Header';


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
      <Header/>
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
