import logo from './logo.svg'

function App() {
    return (
        <div className="flex justify-center items-center bg-slate-800 min-w-screen min-h-screen">
            <header className="flex flex-col justify-center items-center text-white">
                <img
                    src={logo}
                    className="w-[150px] h-[150px] animate-[spin_5s_linear_infinite]"
                    alt="logo"
                />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default App
