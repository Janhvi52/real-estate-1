import { useState } from 'react';

export const DarkModeToggle=()=> {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className={`${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        } text-white font-semibold py-2 px-4 rounded-l-lg focus:outline-none`}
        onClick={handleToggle}
      >
        {isDarkMode ? 'Dark' : 'Light'} Mode
      </button>
      <div
        className={`${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
        } h-10 w-10 rounded-full ml-2 transition-all duration-500`}
      ></div>
      <button
        className={`${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        } text-white font-semibold py-2 px-4 rounded-r-lg focus:outline-none`}
        onClick={handleToggle}
      >
        {isDarkMode ? 'On' : 'Off'}
      </button>
    </div>
  );
}
