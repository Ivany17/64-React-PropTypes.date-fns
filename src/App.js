import './App.css';
import React, { Component } from 'react';
import UserSection from './components/UserSection';
import StopWatch from './components/StopWatch';
import Ciao from './components/CiaoSection/Ciao';

// function App() {
//   return <>
//   <UserSection />
//   </>
// }

// export default App;

function App() {
    return <>
    <Ciao name="Elon" id="1" />
    <StopWatch />
    </>
  }
  
  export default App;