import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const Pomodoro = () => {
    const [shortBreak, setShortBreak] = useState(5)
    const [pomodoro, setPomodoro] = useState(25)
    const [start, setStart] = useState(`${pomodoro}:00`)
    const [time, setTime] = useState(pomodoro * 60)

    useEffect(() => {
        setStart(`${pomodoro}:00`)
        setTime(pomodoro * 60)
    }, [pomodoro])

    useEffect(() => {
        const interval = setInterval(() => {
            setTime((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const convertTime = (sec) => {
        let minutes = Math.floor(sec / 60)
        let seconds = sec % 60
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    const startPomodoro = () => {
        setInterval(() => {
            let time = pomodoro * 60
            let minutes = Math.floor(time / 60)
            let seconds = time % 60

            minutes = minutes < 10 ? '0' + minutes : minutes
            seconds = seconds < 10 ? '0' + seconds : seconds

            // console.log(`${minutes}:${seconds}`)
            // setStart(`${minutes}:${seconds}`)
            time--
        }, 1000)
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
                <ChevronUpIcon
                    id="break-increment"
                    onClick={increaseShortBreak}
                    className="h-6 w-6"
                />
                <ChevronDownIcon
                    id="break-decrement"
                    onClick={decreaseShortBreak}
                    className="h-6 w-6"
                />
            </div>
            <div id="session-label">Pomodoro</div>
            <div>
                <input
                    id="session-length"
                    type="number"
                    value={pomodoro}
                    onChange={handlePomodoro}
                />
                <ChevronUpIcon
                    id="session-increment"
                    onClick={increasePomodoro}
                    className="h-6 w-6"
                />
                <ChevronDownIcon
                    id="session-decrement"
                    onClick={decreasePomodoro}
                    className="h-6 w-6"
                />
            </div>

            <div>
                <h2 id="timer-left">{convertTime(time)}</h2>
                <h2 onClick={startPomodoro} id="timer-label">
                    Start
                </h2>
            </div>
        </div>
    )
}

export default Pomodoro
