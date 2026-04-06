import { useState } from 'react';

function SumComponent() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    // Deliberate type error: num1 and num2 should be numbers, but we treat them as strings
    setSum(num1 + num2);
  };
 

  return (
    <div className="mt-6 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md text-center">
      <input type="number" value={num1} onChange={(e) => setNum1(Number(e.target.value))} className="w-20 px-2 py-1 mr-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white" />
      <input type="number" value={num2} onChange={(e) => setNum2(Number(e.target.value))} className="w-20 px-2 py-1 mr-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white" />
      <button onClick={calculateSum} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-200">Calculate Sum</button>
      <p className="mt-3 text-gray-700 dark:text-gray-300">Sum: {sum}</p>
    </div>
  );
}

export default SumComponent;
