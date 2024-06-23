import React, { useState } from 'react';
import './App.css';
import Board from './Board/board';
function App() {
  return (
    
    <div className="App">
      <div className='board'>
        <Board/>
      </div>
    </div>
  );
}

export default App;
