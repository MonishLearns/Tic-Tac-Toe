import React from 'react';
import './board.css';
import useTicTacToe from './customHooks/tic-tac-toe';



const Board = () => {
    const {board,handleClick,getStatusMessage,resetGame} = useTicTacToe();
    return(
    <div>
        <div className="reset_status">
            <div className='status'>
                <h2>{getStatusMessage()}</h2>
            </div>
            <div className='reset_button'>
            <button onClick={resetGame}>Reset game</button>
            </div>
      </div>
        <div className='inner_board'>
            {board.map((val,index) => {
                return(
                <button key={index} className="cell" onClick={(e) => handleClick(index)} disabled={!(val==null)}>{val}</button>
                )
            })}
        </div>
    </div>
    );
}

export default Board;