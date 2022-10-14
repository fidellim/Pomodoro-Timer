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
                className="h-6 w-6 disabled:cursor-not-allowed"
                disabled={isPlaying}
            >
                <ChevronUpIcon />
            </button>
            <button
                id={btnDecId}
                onClick={handleDec}
                className="h-6 w-6 disabled:cursor-not-allowed"
                disabled={isPlaying}
            >
                <ChevronDownIcon />
            </button>
        </>
    )
}

export default Time
