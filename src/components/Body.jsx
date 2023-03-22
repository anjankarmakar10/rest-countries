import React from "react";
import { Search } from "react-feather";
import useCountries from "../hooks/useCountries";
import Country from "./Country";

const Body = () => {
  const countries = useCountries();

  return (
    <div className="bg-light-gray min-h-[90vh] dark:bg-very-dark-blue text-very-dark-blue2">
      <div className="container mx-auto px-8 py-10">
        <section className="flex flex-col gap-8  md:flex-row md:items-center md:justify-between">
          <div className="bg-white shadow flex px-6 py-4 md:w-1/3 gap-4 rounded-md dark:bg-dark-blue">
            <Search className="text-dark-gray dark:text-white" />
            <input
              className="text-dark-gray w-full dark:bg-dark-blue dark:text-white placeholder:dark:text-white outline-none"
              type="text"
              placeholder="Sarch for a country..."
            />
          </div>
          <div className="bg-white shadow  rounded-md dark:bg-dark-blue p-4 md:w-1/6">
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

        <section className="py-10 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {countries ? (
            countries.map((country) => <Country country={country} />)
          ) : (
            <h1>Loading....</h1>
          )}
        </section>
      </div>
    </div>
  );
};

export default Body;
