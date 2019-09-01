import React from 'react';
import { Menu, CardList, StickyMenu } from "./Components/index";
import './App.scss';

function App() {
  return (
    <div className="App">
      <Menu />
      <StickyMenu />
      <CardList />
    </div>
  );
}

export default App;
