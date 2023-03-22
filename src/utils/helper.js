const filter = (countries, region) => {
  return countries.filter(
    (country) => country?.region.toLowerCase() === region
  );
};

export { filter };
