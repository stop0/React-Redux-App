import React from 'react';
import './App.css';
import Pic from "./components/pic"
import { getPic } from './actions/actions'


function App() {
  return (
    <div className="App">
      <Pic value = {()=>getPic}/>
    </div>
  );
}

export default App;
