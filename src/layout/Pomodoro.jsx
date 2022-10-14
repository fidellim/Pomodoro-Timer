import { useState, useRef } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import {
    ArrowPathRoundedSquareIcon,
    PauseIcon,
    PlayIcon,
} from '@heroicons/react/24/solid'
import Time from '../components/Time'

let myInterval = null
const ONEMIN = 60

const Pomodoro = () => {
    const audioRef = useRef()

    const [pomodoro, setPomodoro] = useState({
        shortBreak: 5,
        session: 25,
        timeInSecs: 25 * ONEMIN,
        isPlaying: false,
        isSession: true,
    })

    const convertTime = (timeInSecs) => {
        let minutes = Math.floor(timeInSecs / 60)
        let seconds = timeInSecs % 60
        minutes = minutes < 10 ? '0' + minutes : minutes
        seconds = seconds < 10 ? '0' + seconds : seconds
        return `${minutes}:${seconds}`
    }

    const startPausePomodoro = () => {
        if (pomodoro.isPlaying) {
            clearInterval(myInterval)
            setPomodoro((prev) => ({
                ...prev,
                isPlaying: false,
            }))
        } else {
            myInterval = setInterval(() => {
                setPomodoro((prev) => {
                    if (prev.timeInSecs === 0) {
                        audioRef.current.play()
                        if (prev.isSession) {
                            return {
                                ...prev,
                                isSession: !prev.isSession,
                                timeInSecs: prev.shortBreak * ONEMIN,
                            }
                        } else {
                            return {
                                ...prev,
                                isSession: !prev.isSession,
                                timeInSecs: prev.session * ONEMIN,
                            }
                        }
                    } else {
                        return {
                            ...prev,
                            timeInSecs: prev.timeInSecs - 1,
                        }
                    }
                })
            }, 1000)
            setPomodoro((prev) => ({
                ...prev,
                isPlaying: true,
            }))
        }
    }

    const resetPomodoro = () => {
        clearInterval(myInterval)
        setPomodoro((prev) => ({
            shortBreak: 5,
            session: 25,
            timeInSecs: 25 * ONEMIN,
            isPlaying: false,
            isSession: true,
        }))
        audioRef.current.pause()
        audioRef.current.currentTime = 0
    }

    const handleShortBreak = (event) => {
        const { value } = event.target
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: value,
            }))
        } else if (value < 1) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: 1,
            }))
        } else if (value > 60) {
            const valueString = String(value)
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: Number(valueString.slice(0, -1)),
            }))
        }
    }

    const decreaseShortBreak = () => {
        const value = Number(pomodoro.shortBreak) - 1
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: value,
            }))
        } else if (value < 1) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: 1,
            }))
        }
    }

    const increaseShortBreak = () => {
        const value = Number(pomodoro.shortBreak) + 1
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: value,
            }))
        } else if (value > 60) {
            setPomodoro((prev) => ({
                ...prev,
                shortBreak: 60,
            }))
        }
    }

    const handleSession = (event) => {
        const { value } = event.target
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                session: value,
                timeInSecs: value * ONEMIN,
            }))
        } else if (value < 1) {
            setPomodoro((prev) => ({
                ...prev,
                session: 1,
                timeInSecs: 1 * ONEMIN,
            }))
        } else if (value > 60) {
            const valueString = String(value)
            setPomodoro((prev) => ({
                ...prev,
                session: Number(valueString.slice(0, -1)),
                timeInSecs: Number(valueString.slice(0, -1)) * ONEMIN,
            }))
        }
    }

    const decreaseSession = () => {
        const value = Number(pomodoro.session) - 1
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                session: value,
                timeInSecs: value * ONEMIN,
            }))
        } else if (value < 1) {
            setPomodoro((prev) => ({
                ...prev,
                session: 1,
                timeInSecs: 1 * ONEMIN,
            }))
        }
    }

    const increaseSession = () => {
        const value = Number(pomodoro.session) + 1
        if (value >= 1 && value <= 60) {
            setPomodoro((prev) => ({
                ...prev,
                session: value,
                timeInSecs: value * ONEMIN,
            }))
        } else if (value > 60) {
            setPomodoro((prev) => ({
                ...prev,
                session: 60,
                timeInSecs: 60 * ONEMIN,
            }))
        }
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-[30px] font-extrabold text-center mb-6">
                Pomodoro
            </h1>
            <div className="flex flex-wrap gap-2 justify-center items-center mx-2">
                <Time
                    title="Short Break"
                    titleId="break-label"
                    inputId="break-length"
                    btnIncId="break-increment"
                    btnDecId="break-decrement"
                    handleValue={handleShortBreak}
                    handleInc={increaseShortBreak}
                    handleDec={decreaseShortBreak}
                    isPlaying={pomodoro.isPlaying}
                    value={pomodoro.shortBreak}
                />
                <Time
                    title="Session"
                    titleId="session-label"
                    inputId="session-length"
                    btnIncId="session-increment"
                    btnDecId="session-decrement"
                    handleValue={handleSession}
                    handleInc={increaseSession}
                    handleDec={decreaseSession}
                    isPlaying={pomodoro.isPlaying}
                    value={pomodoro.session}
                />
            </div>
            <div className="max-w-[275px] w-full h-auto relative mt-7 mb-3">
                <CircularProgressbar
                    value={pomodoro.timeInSecs}
                    maxValue={pomodoro.session * 60}
                    strokeWidth="5"
                    styles={buildStyles({
                        pathColor: '#F87272',
                        trailColor: '#161932',
                    })}
                />
                <div className="flex flex-col items-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <h2 id="timer-label" className="font-light text-[24px]">
                        {pomodoro.isSession ? 'Session' : 'Break'}
                    </h2>
                    <h2 id="time-left" className="font-bold text-[48px]">
                        {convertTime(pomodoro.timeInSecs)}
                    </h2>
                </div>
            </div>
            <div className="flex gap-3">
                <button
                    id="start_stop"
                    onClick={startPausePomodoro}
                    className="h-6 w-6"
                >
                    {pomodoro.isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>
                <button id="reset" onClick={resetPomodoro} className="h-6 w-6">
                    <ArrowPathRoundedSquareIcon />
                </button>
            </div>

            <audio
                id="beep"
                ref={audioRef}
                preload="auto"
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            ></audio>
        </div>
    )
}

export default Pomodoro
