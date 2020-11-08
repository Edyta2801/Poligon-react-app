import React from 'react';
import { MenuLink } from './components/MenuNav';
import {Menu} from './components/MenuNav';



import Header from './components/Header';
import Content from './components/Content';
import Articles from './pages/Articles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact" isActive>Contact</MenuLink>
        <MenuLink to="/posts">Posts</MenuLink>
      </Menu>
      <Content>
        <Articles />
      </Content>
      <Footer />
    </div>
  );
}


export default App;
