const sortData = (data, state) => {
  const { sortBy } = state;

  if (sortBy === "LOW_TO_HIGH") {
    return [...data].sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortBy === "HIGH_TO_LOW") {
    return [...data].sort((a, b) => b.discountedPrice - a.discountedPrice);
  } else {
    return [...data];
  }
};

export { sortData };
