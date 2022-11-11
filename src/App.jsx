import { useState, useEffect, useRef } from 'react'
import './index.css'
import useWordGame from './hooks/useWordGame'

function App() {
  const {inputRef, text, handleTextChange, gameRunning, timeRemaining, handleClick, count} = useWordGame(10)

  return (
    <div className="App">
        <h1>How fast do you type?</h1>
        <textarea ref={inputRef} value={text} name="" id="" cols="15" rows="1" 
            onChange={handleTextChange} 
            disabled={!gameRunning}
        />
        <h4>Time remaining: {timeRemaining}</h4>
        <button onClick={handleClick} disabled={gameRunning}>Start Game</button>
        <h1>Word count: {count}</h1>
    </div>
  )
}

export default App
