import { useState, useEffect } from "react";
import { URL } from "../constants";
const useCountries = () => {
  const [countires, setCountires] = useState(null);

  const getCountires = async () => {
    try {
      const response = await fetch(URL);
      const results = await response.json();
      setCountires(results);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCountires();
  }, []);

  return countires;
};

export default useCountries;
