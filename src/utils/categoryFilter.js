const categoryFilter = (data, state) => {
  const { jordans, vapor, footballShoes, clubMerch } = state;

  const catergoryFilterdArray = [];
  if (!jordans && !vapor && !footballShoes && !clubMerch) {
    return data;
  }

  if (jordans) {
    let newData = data.filter((product) => product.categoryName === "jordans");
    catergoryFilterdArray.push(...newData);
  }
  if (vapor) {
    let newData = data.filter((product) => product.categoryName === "vapor");
    catergoryFilterdArray.push(...newData);
  }
  if (footballShoes) {
    let newData = data.filter(
      (product) => product.categoryName === "Football Shoes"
    );
    catergoryFilterdArray.push(...newData);
  }
  if (clubMerch) {
    let newData = data.filter(
      (product) => product.categoryName === "Club Merch"
    );
    catergoryFilterdArray.push(...newData);
  }

  return catergoryFilterdArray;
};
export { categoryFilter };
