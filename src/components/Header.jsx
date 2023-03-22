import React, { useState } from "react";
import { Moon, Sun } from "react-feather";
import { Link } from "react-router-dom";

export const Header = () => {
  const [toggle, setToggle] = useState(true);

  if (toggle) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return (
    <nav className=" text-very-dark-blue2 sticky top-0 shadow-md dark:text-white dark:bg-dark-blue bg-white">
      <div className="container mx-auto px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold text-xl">
          Where is the world?
        </Link>
        <div
          onClick={() => setToggle(!toggle)}
          className="font-semibold text-base cursor-pointer flex items-center gap-2"
        >
          {!toggle ? (
            <div className="flex items-center gap-2">
              <Moon className="dark:text-white" />
              Dark Mode
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sun className="dark:text-white" />
              Light Mode
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
