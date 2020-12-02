import React from 'react';
import { MenuLink } from './components/MenuNav';
import { Menu } from './components/MenuNav';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';



import Form from './pages/Form';

import Header from './components/Header';
import Content from './components/Content';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      {/* <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about">About</MenuLink>
        <MenuLink to="/contact" isActive>Contact</MenuLink>
        <MenuLink to="/posts">Posts</MenuLink>
      </Menu> */}
      <Content>
        <Switch>
          <Route path='/articles'>
            <Articles />
          </Route>
          <Route path='/form'>
            <Form />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </Router>
  );
}


export default App;
