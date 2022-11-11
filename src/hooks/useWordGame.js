import { useState, useEffect, useRef } from 'react'

function useWordGame(initTime) {
    const startTime = initTime
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(startTime)
    const [gameRunning, setGameRunning] = useState(false)
    const inputRef = useRef(null)

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
        // console.log(`is game running: ${gameRunning}`)
        setGameRunning(prevState => !prevState)
        gameRunning &&  console.log("Game started")
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
        gameRunning && console.log("Game started")
        console.log("Setting focus to ", inputRef.current)
        inputRef.current.disabled = false
        inputRef.current.focus()
        }
    } 

    return {inputRef, text, handleTextChange, gameRunning, timeRemaining, handleClick, count}
}

export default useWordGame
