import React from "react";
import { Search } from "react-feather";

const Body = () => {
  return (
    <div className="bg-light-gray min-h-[90vh]">
      <div className="container mx-auto px-8 py-8">
        <section className="flex items-center justify-between">
          <div className="bg-white shadow flex px-6 py-4 md:w-1/3 gap-4 rounded-sm dark:bg-dark-blue">
            <Search className="text-dark-gray dark:text-white" />
            <input
              className="text-dark-gray w-full dark:bg-dark-blue dark:text-white placeholder:dark:text-white outline-none"
              type="text"
              placeholder="Sarch for a country..."
            />
          </div>
          <div className="bg-white shadow  rounded-sm dark:bg-dark-blue p-4 md:w-1/6">
            <select
              className="cursor-pointer text-dark-gray dark:bg-dark-blue dark:text-white outline-none w-full"
              name=""
              id=""
            >
              <optgroup className="">
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceaina">Oceania</option>
              </optgroup>
            </select>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
