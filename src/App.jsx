import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-2xl text-center bg-[#f7f7f7] rounded-md p-5 space-y-5">
          <h1>Vite + React</h1>
          <div className="card">
            <button
              className="bg-blue-500 rounded-md px-7 py-3 text-white font-semibold text-lg"
              onClick={() => setCount((count) => count + 1)}
            >
              count is: {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
