import './App.css';
import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import ContentContainer from './components/contentContainer/ContentContainer';
import React from 'react';
function App() {

  const [selected, setSelected] = useState("About");

  return (
    <div className="App">
      <Navbar setSelected={setSelected} className="Navbar"></Navbar>
      <ContentContainer selected={selected}></ContentContainer>
    </div>
  );
}

export default App;
