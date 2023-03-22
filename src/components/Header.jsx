import React from "react";
import { Moon } from "react-feather";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className=" text-very-dark-blue2 sticky top-0 shadow-md dark:text-white dark:bg-dark-blue">
      <div className="container mx-auto px-8 flex items-center justify-between h-16">
        <Link to="/" className="font-extrabold text-xl">
          Where is the world?
        </Link>
        <div className="font-semibold text-base cursor-pointer flex items-center gap-2">
          <Moon className="dark:text-white" />
          Dark Mode
        </div>
      </div>
    </nav>
  );
};
