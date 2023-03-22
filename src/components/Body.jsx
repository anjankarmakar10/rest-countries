import React, { useEffect, useState } from "react";
import { Search } from "react-feather";
import useCountries from "../hooks/useCountries";
import { filter, search } from "../utils/helper";
import Country from "./Country";

const Body = () => {
  const countries = useCountries();
  const [filterCounties, setFilterCountries] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilterCountries(countries);
  }, [countries]);

  const handleFilter = (e) => {
    let region = e.target.value;
    const filtered = filter(countries, region);
    const data = filtered.length === 0 ? countries : filtered;
    setFilterCountries(data);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const searched = search(countries, searchText);
    setFilterCountries(searched);
  };

  return (
    <div className="bg-light-gray min-h-[90vh] dark:bg-very-dark-blue text-very-dark-blue2">
      <div className="container mx-auto px-8 py-10">
        <section className="flex flex-col gap-8  md:flex-row md:items-center md:justify-between mb-2">
          <form
            onSubmit={handleOnSubmit}
            className="bg-white shadow flex px-6 py-4 md:w-1/3 gap-4 rounded-md dark:bg-dark-blue"
          >
            <Search className="text-dark-gray dark:text-white" />
            <input
              onChange={handleChange}
              value={searchText}
              className="text-dark-gray w-full dark:bg-dark-blue dark:text-white placeholder:dark:text-white outline-none"
              type="text"
              placeholder="Sarch for a country..."
            />
          </form>
          <div className="bg-white shadow  rounded-md dark:bg-dark-blue p-4 md:w-1/6">
            <select
              className="cursor-pointer text-dark-gray dark:bg-dark-blue dark:text-white outline-none w-full"
              name=""
              id=""
              onChange={handleFilter}
            >
              <optgroup className="">
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">Americas</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
              </optgroup>
            </select>
          </div>
        </section>
        {filterCounties ? (
          <span className="text-very-dark-blue2  dark:text-light-gray font-semibold">
            Total Countires {filterCounties.length}
          </span>
        ) : (
          ""
        )}
        <section className="py-8 grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterCounties ? (
            filterCounties.map((country) => (
              <Country key={+country?.ccn3} country={country} />
            ))
          ) : (
            <h1>Loading....</h1>
          )}
        </section>
      </div>
    </div>
  );
};

export default Body;
