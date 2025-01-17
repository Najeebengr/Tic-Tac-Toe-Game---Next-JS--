'use client'
import React, { useState } from 'react'
import Board from '../board/page';

export function calculateWinner(squares: (string | null)[]): string | null {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
function Game() {
    
const [history, setHistory] = useState([Array(9).fill(null) as (string | null)[]]);

const [currentMove, setCurrentMove] = useState(0);
const xIsNext = currentMove % 2 === 0;
const currentSquares = history[currentMove];
// console.log(currentMove);
// console.log(currentSquares);

function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    // console.log(history);
    console.log(nextHistory.length);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }
 
  
    function jumpTo(nextMove: any) {
      setCurrentMove(nextMove);
    }
  
    
    return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}  onReset={handleReset} />
        </div>
         </div>
    );
}

export default Game
