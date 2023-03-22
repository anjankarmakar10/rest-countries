import { useState, useEffect } from "react";

const useCountry = (id) => {
  const [country, setCountry] = useState(null);

  const getCountry = async (id) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${id}`
      );
      const results = await response.json();
      setCountry(results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCountry(id);
  }, [id]);

  return country;
};
export default useCountry;
