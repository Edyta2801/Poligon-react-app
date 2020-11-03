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



// class News extends React.Component {
//   state = {
//     date: new Date(),
//     score: 5
//   }
//   componentDidMount() {
//     let loading = true;
//     this.setState({ score: 7 }, () => {
//       loading = false;
//     });
//   }



//   render() {
//     const { header, intro } = this.props;
//     const { score } = this.state;

//     return (
//       <div style={styles}>
//         <h2>{header}</h2>
//         <p style={styles.para}>{intro}</p>
//         <p>{score}</p>
//       </div>

//     );
//   }
// }
const Scoring = ({ score }) => <p>Ocena:{score}</p>;
const Author =({author})=><p>Autor:{author}</p>;

function News({ header, intro, author }) {
  const [score] = useState(7);
  return (
    <div style={styles}>
      <h2>{header}</h2>
      <p style={styles.para}>{intro}</p>
      <Author author={author}/>
      <Scoring score={score} />
    </div>
  );
}

// function News({ header, intro }) {
//   return (
//     <div className="News">
//       <h2>{header}</h2>
//       <p>{intro}</p>
//     </div>
//   );
// }


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
      {/* <News header="Nagłówek 1" intro="Intro 1" />
      <News header="Nagłówek 2:Breaking news" intro="Intro 2" />
      <News header="Nagłówek 3: Nie śpię, bo trzymam kredens" intro="Intro 3" />*/}
    </div>
  );
}


export default App;
