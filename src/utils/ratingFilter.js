const ratingFilter = (data, state) => {
  const { ratings } = state;
  if (ratings === "") {
    return data;
  } else {
    return data.filter((product) => product.ratings >= Number(ratings));
  }
};

export { ratingFilter };
