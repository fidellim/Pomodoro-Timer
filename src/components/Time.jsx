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
        <div className="flex flex-col gap-2">
            <div id={titleId}>{title}</div>
            <div className="relative bg-fontColor text-background rounded-md">
                <input
                    id={inputId}
                    type="number"
                    value={value}
                    onChange={handleValue}
                    disabled={isPlaying}
                    className="w-full bg-transparent px-2 py-1.5 disabled:cursor-not-allowed"
                />
                <div className="absolute top-[50%] right-[5%] -translate-y-[50%] flex flex-col justify-center items-center z-100">
                    <button
                        id={btnIncId}
                        onClick={handleInc}
                        className="h-4 w-4 disabled:cursor-not-allowed"
                        disabled={isPlaying}
                    >
                        <ChevronUpIcon />
                    </button>
                    <button
                        id={btnDecId}
                        onClick={handleDec}
                        className="h-4 w-4 disabled:cursor-not-allowed"
                        disabled={isPlaying}
                    >
                        <ChevronDownIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Time
