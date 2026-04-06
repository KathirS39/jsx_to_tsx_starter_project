import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SumComponent from './components/SumComponent'; // Import the SumComponent



function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.body.style.margin = '0';
    const root = document.getElementById('root');
    if (root) root.style.padding = '0';
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-8 transition-colors duration-300">
      <div className="flex gap-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 h-20" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 h-20" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Vite + React</h1>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-8 text-center">
        <button onClick={() => setCount((count) => count + 1)} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200">
          count is {count}
        </button>
        <p className="text-gray-600 dark:text-gray-400">
          Edit <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-6 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more
      </p>
      <SumComponent /> {/* Use the SumComponent */}
    </div>
  )
}

export default App
