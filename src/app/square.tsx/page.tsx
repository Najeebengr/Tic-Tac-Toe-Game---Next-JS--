import React from 'react'

interface SquareProps {
    value: string | null;  // The value can be either 'X', 'O', or null
    onSquareClick: () => void; // The click handler doesn't need to accept any arguments
  }

function Square({value, onSquareClick}: SquareProps) {
  return (
    <div className=''>
       <button className="w-16 h-16 bg-gray-200 border border-gray-400 flex items-center justify-center text-2xl font-bold cursor-pointer focus:outline-none transition-colors duration-200 hover:bg-gray-300" onClick={onSquareClick}>
      {value}
    </button>
    </div>
  )
}

export default Square
