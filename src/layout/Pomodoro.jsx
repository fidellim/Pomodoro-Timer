import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

let myInterval = null

const Pomodoro = () => {
    // const [shortBreak, setShortBreak] = useState(5)
    // const [pomodoro, setPomodoro] = useState(25)
    // const [time, setTime] = useState(pomodoro * ONEMIN)
    // const [isPlaying, setIsPlaying] = useState(false)
    // const [isSession, setIsSession] = useState(true)

    const [pomodoro, setPomodoro] = useState({
        shortBreak: 5,
        session: 25,
        timeInSecs: 25 * ONEMIN,
        isPlaying: false,
        isSession: true,
    })

        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    const startPausePomodoro = () => {
            clearInterval(myInterval)
        } else {
            myInterval = setInterval(() => {
            }, 1000)
        }
    }

    const resetPomodoro = () => {
        clearInterval(myInterval)
    }

    const handleShortBreak = (event) => {
        const { value } = event.target
        if (value >= 1 && value <= 60) {
        } else if (value < 1) {
        } else if (value > 60) {
            const valueString = String(value)
        }
    }

    const decreaseShortBreak = () => {
        if (value >= 1 && value <= 60) {
        } else if (value < 1) {
        }
    }

    const increaseShortBreak = () => {
        if (value >= 1 && value <= 60) {
        } else if (value > 60) {
        }
    }

        const { value } = event.target
        if (value >= 1 && value <= 60) {
        } else if (value < 1) {
        } else if (value > 60) {
            const valueString = String(value)
        }
    }

        if (value >= 1 && value <= 60) {
        } else if (value < 1) {
        }
    }

        if (value >= 1 && value <= 60) {
        } else if (value > 60) {
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
