const categoryFilter = (data, state) => {
  const { category } = state;

  if (category.length === 0) {
    return data;
  } else {
    const catergoryFilterdArray = data.filter((product) =>
      category.includes(product.categoryName)
    );
    return catergoryFilterdArray;
  }
};

export { categoryFilter };
