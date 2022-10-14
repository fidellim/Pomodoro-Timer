import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

let myInterval = null

const Pomodoro = () => {
    const [shortBreak, setShortBreak] = useState(5)
    const [pomodoro, setPomodoro] = useState(25)
    const [time, setTime] = useState(pomodoro * 60)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        setTime(pomodoro * 60)
    }, [pomodoro])

    const convertTime = (sec) => {
        let minutes = Math.floor(sec / 60)
        let seconds = sec % 60
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    const startPausePomodoro = () => {
        if (isPlaying) {
            console.log(myInterval)
            clearInterval(myInterval)
            setIsPlaying(false)
        } else {
            myInterval = setInterval(() => {
                setTime((prev) => prev - 1)
            }, 1000)
            console.log(myInterval)
            setIsPlaying(true)
        }
    }

    const resetPomodoro = () => {
        setTime(pomodoro * 60)
        clearInterval(myInterval)
        setIsPlaying(false)
        setPomodoro(25)
        setShortBreak(5)
    }

    const handleShortBreak = (event) => {
        const { value } = event.target
        if (value >= 1 && value <= 60) {
            setShortBreak(value)
        } else if (value < 1) {
            setShortBreak(1)
        } else if (value > 60) {
            const valueString = String(value)
            setShortBreak(Number(valueString.slice(0, -1)))
        }
    }

    const decreaseShortBreak = () => {
        const value = Number(shortBreak) - 1
        if (value >= 1 && value <= 60) {
            setShortBreak(value)
        } else if (value < 1) {
            setShortBreak(1)
        }
    }

    const increaseShortBreak = () => {
        const value = Number(shortBreak) + 1
        if (value >= 1 && value <= 60) {
            setShortBreak(value)
        } else if (value > 60) {
            setShortBreak(60)
        }
    }

    const handlePomodoro = (event) => {
        const { value } = event.target
        if (value >= 1 && value <= 60) {
            setPomodoro(value)
        } else if (value < 1) {
            setPomodoro(1)
        } else if (value > 60) {
            const valueString = String(value)
            setPomodoro(Number(valueString.slice(0, -1)))
        }
    }

    const decreasePomodoro = () => {
        const value = Number(pomodoro) - 1
        if (value >= 1 && value <= 60) {
            setPomodoro(value)
        } else if (value < 1) {
            setPomodoro(1)
        }
    }

    const increasePomodoro = () => {
        const value = Number(pomodoro) + 1
        console.log('Value: ', value)
        if (value >= 1 && value <= 60) {
            setPomodoro(value)
        } else if (value > 60) {
            setPomodoro(60)
        }
    }

    return (
        <div>
            <h1>Pomodoro</h1>
            <div id="break-label">Short Break</div>
            <div>
                <input
                    id="break-length"
                    type="number"
                    value={shortBreak}
                    onChange={handleShortBreak}
                />
                <button
                    id="break-increment"
                    onClick={increaseShortBreak}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={isPlaying}
                >
                    <ChevronUpIcon />
                </button>
                <button
                    id="break-decrement"
                    onClick={decreaseShortBreak}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={isPlaying}
                >
                    <ChevronDownIcon />
                </button>
            </div>
            <div id="session-label">Pomodoro</div>
            <div>
                <input
                    id="session-length"
                    type="number"
                    value={pomodoro}
                    onChange={handlePomodoro}
                />
                <button
                    id="session-increment"
                    onClick={increasePomodoro}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={isPlaying}
                >
                    <ChevronUpIcon />
                </button>
                <button
                    id="session-decrement"
                    onClick={decreasePomodoro}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={isPlaying}
                >
                    <ChevronDownIcon />
                </button>
            </div>

            <div>
                <h2 id="timer-label">Session</h2>
                <h2 id="time-left">{convertTime(time)}</h2>
                <h2 id="start_stop" onClick={startPausePomodoro}>
                    {isPlaying ? 'Stop' : 'Start'}
                </h2>
                <h2 id="reset" onClick={resetPomodoro}>
                    reset
                </h2>
            </div>
        </div>
    )
}

export default Pomodoro
