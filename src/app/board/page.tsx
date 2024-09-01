import React from 'react'
import Square from '../square.tsx/page';
import { calculateWinner } from '../game/page';

interface BoardProps {
    xIsNext: boolean;
    squares: (string | null)[];
    onPlay: (nextSquares: (string | null)[]) => void;
    onReset: () => void; 
  }

function Board({ xIsNext, squares, onPlay, onReset }: BoardProps) {
    function handleClick(i : number) {
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } else {
          nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
      }
    
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
        status = 'Winner: ' + winner;
      } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
      }
    
      return (
        <>
          <div className='status py-5'>{status}</div>
          <div className="board-row grid grid-cols-3 mb-4 gap-2 max-w-sm w-full">
          {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onSquareClick={() => handleClick(index)}
        />
      ))}
          </div>
          <button className='block m-auto bg-[#595984] text-white p-3 font-medium rounded-md mt-2' onClick={onReset}>
            Reset Game
          </button>
        </>
      );
}

export default Board
