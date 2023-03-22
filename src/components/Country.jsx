import React from "react";

const Country = () => {
  return (
    <article className="bg-white font-semibold dark:bg-dark-blue shadow-sm rounded-md overflow-hidden cursor-pointer">
      <img className="w-full" src="https://flagcdn.com/gt.svg" alt="" />
      <div className="p-6 pb-10">
        <h2 className="font-extrabold text-xl mb-2  text-very-dark-blue2 dark:text-white">
          Germany
        </h2>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2  dark:text-light-gray">
            Population:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">87229462</span>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2  dark:text-light-gray">
            Region:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">Europe</span>
        </div>
        <div className="flex items-center gap-1">
          <h3 className="text-very-dark-blue2 dark:text-light-gray">
            Capital:
          </h3>
          <span className="text-dark-blue dark:text-dark-gray">Berlin</span>
        </div>
      </div>
    </article>
  );
};

export default Country;
