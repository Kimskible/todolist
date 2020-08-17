import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/display';

function App() {
  return (
    <div className="App">
     <div><Navbar/></div>
     <div><Body/></div>
    </div>
  );
}

export default App;
