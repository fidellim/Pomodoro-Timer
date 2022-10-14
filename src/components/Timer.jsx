import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'

const Time = ({
    title,
    titleId,
    inputId,
    btnIncId,
    btnDecId,
    handleValue,
    handleInc,
    handleDec,
    isPlaying,
    value,
}) => {
    return (
        <>
            <div id={titleId}>{title}</div>
            <input
                id={inputId}
                type="number"
                value={value}
                onChange={handleValue}
                disabled={isPlaying}
            />
            <button
                id={btnIncId}
                onClick={handleInc}
                className="h-6 w-6 disabled:opacity-75"
                disabled={isPlaying}
            >
                <ChevronUpIcon />
            </button>
            <button
                id={btnDecId}
                onClick={handleDec}
                className="h-6 w-6 disabled:opacity-75"
                disabled={isPlaying}
            >
                <ChevronDownIcon />
            </button>
        </>
    )
}

export default Time

{
    /* 
    <div id="break-label">Short Break</div>
    <div>
            <input
                id="break-length"
                type="number"
                value={pomodoro.shortBreak}
                onChange={handleShortBreak}
                disabled={pomodoro.isPlaying}
            />
            <button
                id="break-increment"
                onClick={increaseShortBreak}
                className="h-6 w-6 disabled:opacity-75"
                disabled={pomodoro.isPlaying}
            >
                <ChevronUpIcon />
            </button>
            <button
                id="break-decrement"
                onClick={decreaseShortBreak}
                className="h-6 w-6 disabled:opacity-75"
                disabled={pomodoro.isPlaying}
            >
                <ChevronDownIcon />
            </button>
        </div> */
}

{
    /* <div id="session-label">Session</div>
            <div>
                <input
                    id="session-length"
                    type="number"
                    value={pomodoro.session}
                    onChange={handleSession}
                    disabled={pomodoro.isPlaying}
                />
                <button
                    id="session-increment"
                    onClick={increaseSession}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={pomodoro.isPlaying}
                >
                    <ChevronUpIcon />
                </button>
                <button
                    id="session-decrement"
                    onClick={decreaseSession}
                    className="h-6 w-6 disabled:opacity-75"
                    disabled={pomodoro.isPlaying}
                >
                    <ChevronDownIcon />
                </button>
            </div> */
}
