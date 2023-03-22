import React from "react";

const Country = ({ country }) => {
  const { name, flags, region, capital, population } = country;

  return (
    <article className="bg-white font-semibold dark:bg-dark-blue shadow-sm rounded-md overflow-hidden cursor-pointer">
      <img
        className="w-full h-40 object-cover"
        src={flags?.svg}
        alt={flags?.alt}
      />
      <div className="p-6 pb-10">
        <h2 className="font-extrabold text-lg mb-2  text-very-dark-blue2 dark:text-white">
          {name?.common}
        </h2>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2  dark:text-light-gray">
            Population:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">
            {(+population / 1000000).toFixed(1)} millions
          </span>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2  dark:text-light-gray">
            Region:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">{region}</span>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2 dark:text-light-gray">
            Capital:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">{capital}</span>
        </div>
      </div>
    </article>
  );
};

export default Country;
