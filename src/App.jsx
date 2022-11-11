import { useState, useEffect } from 'react'
import './index.css'

function App() {
  const startTime = 10
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(startTime)
  const [gameRunning, setGameRunning] = useState(false)

  const handleTextChange = (event) => {
    // console.log("Text changed")
    setText(event.target.value)
    // console.log("=>", text)
  }

  const updateWordCount = () => {
    const trimmed_text = text.trim()
    const wordCount = trimmed_text.length ? trimmed_text.split(" ").length : 0
    setCount(wordCount)
  }

  const startGame = () => {
    console.log("Starting Game ...")
    console.log(`is game running: ${gameRunning}`)
    setGameRunning(prevState => !prevState)
    console.log(`is game running: ${gameRunning}`)
  }

  useEffect(() => {
    // console.log("effect called")
    setTimeout(() =>{
      console.log("Delayed for 1 second")
      setTimeRemaining(timeRemaining => gameRunning && timeRemaining > 0 ? timeRemaining - 1 : timeRemaining)
    }, "1000")

    timeRemaining === 0 && setGameRunning(false)

  }, [timeRemaining, gameRunning])

  useEffect(() => {
    updateWordCount()
    // console.log("effect called")
  }, [gameRunning])

  const handleClick = () => {
    if (!gameRunning) { 
      setTimeRemaining(startTime)
      setText("")
      setGameRunning(true) 
    }

  } 

  return (
    <div className="App">
        <h1>How fast do you type?</h1>
        <textarea value={text} name="" id="" cols="15" rows="1" onChange={handleTextChange} disabled={!gameRunning}/>
        <h4>Time remaining: {timeRemaining}</h4>
        <button onClick={handleClick} disabled={gameRunning}>Start Game</button>
        <h1>Word count: {count}</h1>
    </div>
  )
}

export default App
