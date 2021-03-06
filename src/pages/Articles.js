import React from 'react';

import News from '../components/News.js';

const data = [
  {
    id: 1, author: 'Jan Brzęczek', title: 'Pilne: Co to był za dzień!', intro: 'Tego świat jeszcze nie widział',
  }, {
    id: 2, author: 'Jan Brzęczek', title: 'Wszyscy zazdroszczą Polakom!', intro: 'Takiego clickbajtowego tytułu jeszcze nikt nie widział',
  }, {
    id: 3, author: 'Jan Brzęczek', title: 'Adam Małysz zgolił wąs', intro: 'Po przegranym zakładzie z Piotrem Żyłą nasz mistrz olimpijski zgolił wąsy',
  }
];


function Articles() {
  return (
    <div >
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

export default Articles;
