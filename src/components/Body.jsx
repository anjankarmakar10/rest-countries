import React from "react";
import { Search } from "react-feather";

const Body = () => {
  return (
    <div className="bg-light-gray min-h-[90vh]">
      <div className="container mx-auto px-8 py-8">
        <section>
          <div className="bg-white shadow flex px-6 py-4 md:w-1/3 gap-4 rounded-sm dark:bg-dark-blue">
            <Search className="text-dark-gray dark:text-white" />
            <input
              className="text-dark-gray dark:bg-dark-blue dark:text-white placeholder:dark:text-white outline-none"
              type="text"
              placeholder="Sarch for a country..."
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
