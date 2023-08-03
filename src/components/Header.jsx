import React from "react";
import { MdNightsStay, MdSunny } from "react-icons/md";
const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <nav className="flex justify-between items-center p-5">
        <h1 className="text-lg">Night/Day</h1>

        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdSunny className="text-2xl cursor-pointer" />
          ) : (
            <MdNightsStay className="text-2xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
