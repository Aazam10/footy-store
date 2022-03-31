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

  //   const { jordans, vapor, footballShoes, clubMerch } = state;

  //   const catergoryFilterdArray = [];
  //   if (!jordans && !vapor && !footballShoes && !clubMerch) {
  //     return data;
  //   }

  //   if (jordans) {
  //     let newData = data.filter((product) => product.categoryName === "jordans");
  //     catergoryFilterdArray.push(...newData);
  //   }
  //   if (vapor) {
  //     let newData = data.filter((product) => product.categoryName === "vapor");
  //     catergoryFilterdArray.push(...newData);
  //   }
  //   if (footballShoes) {
  //     let newData = data.filter(
  //       (product) => product.categoryName === "Football Shoes"
  //     );
  //     catergoryFilterdArray.push(...newData);
  //   }
  //   if (clubMerch) {
  //     let newData = data.filter(
  //       (product) => product.categoryName === "Club Merch"
  //     );
  //     catergoryFilterdArray.push(...newData);
  //   }

  //   return catergoryFilterdArray;
  // };
};

export { categoryFilter };
