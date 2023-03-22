import React from "react";
import { ArrowLeft } from "react-feather";
import { useParams, Link } from "react-router-dom";
import useCountry from "../hooks/useContry";
const Details = () => {
  const { id } = useParams();

  const country = useCountry(id);
  let value = "";

  if (country) {
    let [key] = Object.keys(country[0]?.name?.nativeName);
    value = country[0]?.name?.nativeName[key].common;
  }

  return (
    <div>
      {country ? (
        <section className="bg-light-gray min-h-[90vh] dark:bg-very-dark-blue text-very-dark-blue2">
          <div className="container mx-auto px-8 pb-10">
            <Link to={"/"}>
              <button className="text-dark-blue dark:text-dark-gray my-12 bg-white font-semibold dark:bg-dark-blue shadow-sm rounded-md  cursor-pointer py-2 px-6">
                <ArrowLeft className="inline mr-2" />
                <span>Back</span>
              </button>
            </Link>
            <div className="flex lg:items-center lg:gap-32 gap-10 flex-col lg:flex-row">
              <div className="lg:flex-1">
                <img
                  src={country[0]?.flags?.svg}
                  alt={country[0]?.flags?.alt}
                />
              </div>
              <div className="flex flex-col lg:flex-1 gap-6 lg:gap-14">
                <div className="flex items-start md:items-center lg:gap-20 gap-10 lg:justify-start md:justify-evenly flex-col md:flex-row">
                  <div>
                    <h1 className="font-extrabold text-3xl mb-4  text-very-dark-blue2 dark:text-white">
                      {country[0]?.name?.common}
                    </h1>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1 mb-2">
                        <h3 className="text-very-dark-blue2 dark:text-light-gray">
                          Native Name:
                        </h3>
                        <span className="text-dark-blue dark:text-dark-gray">
                          {value}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <h3 className="text-very-dark-blue2 dark:text-light-gray">
                          Population:
                        </h3>
                        <span className="text-dark-blue dark:text-dark-gray">
                          {country[0]?.population}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <h3 className="text-very-dark-blue2 dark:text-light-gray">
                          Region:
                        </h3>
                        <span className="text-dark-blue dark:text-dark-gray">
                          {country[0]?.region}
                        </span>
                      </div>
                      <div className="flex items-start gap-1 mb-2">
                        <h3 className="text-very-dark-blue2 dark:text-light-gray">
                          Sub Region:
                        </h3>
                        <span className="text-dark-blue dark:text-dark-gray">
                          {country[0]?.subregion}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        <h3 className="text-very-dark-blue2 dark:text-light-gray">
                          Capital:
                        </h3>
                        <span className="text-dark-blue dark:text-dark-gray">
                          {country[0]?.capital}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-1 mb-2">
                      <h3 className="text-very-dark-blue2 dark:text-light-gray">
                        Currencies:
                      </h3>
                      <span className="text-dark-blue dark:text-dark-gray">
                        {Object.keys(country[0]?.currencies).join(", ")}
                      </span>
                    </div>
                    <div className="flex items-start gap-1 mb-2">
                      <h3 className="text-very-dark-blue2 dark:text-light-gray">
                        Languages:
                      </h3>
                      <span className="text-dark-blue dark:text-dark-gray">
                        {Object.values(country[0]?.languages).join(", ")}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-very-dark-blue2 dark:text-light-gray flex gap-2 items-center  h-fit">
                  Border Countries:
                  <div className="flex gap-2 flex-wrap">
                    {country[0]?.borders.map((border) => (
                      <Link
                        to={`/details/${border}`}
                        className="text-dark-blue dark:text-dark-gray  bg-white font-semibold dark:bg-dark-blue shadow-sm rounded-md  cursor-pointer py-1 px-6"
                      >
                        {border}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className=" px-8 pb-4 bg-light-gray min-h-[90vh] dark:bg-very-dark-blue text-very-dark-blue2 dark:text-light-gray">
          <div className="container mx-auto mt-4">Loading...</div>
        </div>
      )}
    </div>
  );
};

export default Details;
