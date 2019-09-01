import React from 'react';
import CardList from './Pages/CardList';
import Contact from './Pages/Contact';
import { Menu, StickyMenu } from "./Components/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <StickyMenu />
        <Route path="/" exact component={CardList} />
        <Route path="/contact" exact component={Contact} />
      </Router>
    </div>
  );
}

export default App;
