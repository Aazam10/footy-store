const priceFilter = (data, state) => {
  const { rangeValue } = state;

  return data.filter(
    (product) => product.discountedPrice <= Number(rangeValue)
  );
};

export { priceFilter };
