import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import UserProfile from "./components/UserProfile";
import "./App.css"; // Keep this if needed

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {/* Logo Section */}
      <div className="flex gap-6 my-6">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-20 h-20 transition-transform hover:scale-110" alt="React logo" />
        </a>
      </div>

      {/* Tailwind Test Section */}
      <h1 className="text-3xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>

      {/* Counter Card */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-md text-white text-lg font-medium transition-all"
          aria-label="Increase counter"
        >
          Count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* User Profile Section */}
      <UserProfile />

      {/* Footer */}
      <p className="mt-6 text-gray-500 text-sm">
        Click on the Vite and React logos to learn more.
      </p>
    </div>
  );
}

export default App;
