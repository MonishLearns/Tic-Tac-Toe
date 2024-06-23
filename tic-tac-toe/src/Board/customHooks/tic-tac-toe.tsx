import React, {useState} from "react";
const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
    const [board, setBoard] = useState(initialBoard());
    const [turn, setTurn] = useState(true);

    const calculateWinner= () => {
        // rows same
        if(board[1] && board[1]===board[0] && board[0]===board[2]){
            return true;
        }
        if(board[3] && board[3]===board[5] && board[4]===board[3]){
            return true;
        }
        if(board[6] && board[6]===board[7] && board[8]===board[6]){
            return true;
        }

        // columns
        if(board[0] && board[0]===board[3] && board[0]===board[6]){
            return true;
        }
        if(board[1] && board[1]===board[4] && board[4]===board[7]){
            return true;
        }
        if(board[2] && board[2]===board[5] && board[8]===board[2]){
            return true;
        }

        // diagonals
        if(board[4] && board[0]===board[4] && board[4]===board[8]){
            return true;
        }
        if(board[4] && board[2]===board[4] && board[4]===board[6]){
            return true;
        }
        return false;
    }

    const handleClick = (index : number) => {
        const winner = calculateWinner();
        if(winner || board[index]){
            return null;
        }
        if(turn){
            board[index]='X';
        }
        else{
            board[index]='O';
        }
        setBoard(board);
        setTurn((turn) => !turn);
    }

    const checkBoardFull = () => {
        for(let i=0;i < board.length;i++){
            if(board[i]==null){
                return false;
            }
        }
        return true;
    }

    const getStatusMessage = () => {
        const winner = calculateWinner();
        if(winner){
            if(turn===true){
                return "Player O has won";
            }
            return "Player X has won";
        }
        const boardFull = checkBoardFull();
        if(boardFull){
            return "Its a draw";
        }
        return turn ? "player X turn": "player O turn"; 
    }

    const resetGame = () => {
        setBoard(initialBoard());
        setTurn(true);
    }
    return {board,calculateWinner,handleClick,getStatusMessage,resetGame};
}

export default useTicTacToe;