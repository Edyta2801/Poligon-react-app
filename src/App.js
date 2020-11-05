import React from 'react';


import Header from './components/Header';
import Content from './components/Content';
import Articles from './pages/Articles';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Content>
        <Articles />
      </Content>
    </div>
  );
}


export default App;
