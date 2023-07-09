import React, { useState } from 'react';
import "./App.css";
import Board from "./components/Board";
import Popup from "./components/Popup";


function App() { 
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="App">
      <h1>Minesweeper Game</h1>
      <p className='sideText'>Welcome to Minesweeper. If you're a Windows' user chances are that you already have the game on your computer. This guide will help you in completing your first game.</p> 
      <input id="Button"
        type="button"
        value="Need Help?"
      onClick={togglePopup} />
      {isOpen && <Popup
        content={<>
          <b>Game help guide</b>
          <p><i>You can start by clicking at any random place since it is your first game;
            <br />Try click as many blocks as possible without exploding the board;
            <br />Right click once a mine has been confirmed to add the red flag;
            <br />The number on the block you click shows the mines adjacent to it.
             <br /> Good luck. Have fun!</i></p>
        </>}
        handleClose={togglePopup}
      />} <br /> <Board /> 
    </div>
  );
}
export default App;
      

      
        
