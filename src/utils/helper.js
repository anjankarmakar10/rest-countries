const filter = (countries, region) => {
  return countries.filter(
    (country) => country?.region.toLowerCase() === region
  );
};

const search = (countries, query) => {
  return countries.filter((country) =>
    country?.name?.common.toLowerCase().includes(query)
  );
};

export { filter, search };
