import { useFilter } from "../../../../context/data/FilterContext";
import { useProduct } from "../../../../context/data/ProductContext";

const CategoryFilter = () => {
  const { state, dispatch } = useFilter();
  const { categories } = useProduct();

  const { category } = state;

  return (
    <div className="category-container">
      <h3 className="category-title">Category</h3>

      {categories.map(({ _id, categoryName }) => {
        return (
          <div className="checkbox" key={_id}>
            <label htmlFor={categoryName}>
              <input
                id={categoryName}
                type="checkbox"
                checked={category.includes(categoryName)}
                onChange={() => {
                  dispatch({
                    type: "CATEGORIES",
                    payload: { category: categoryName },
                  });
                }}
              />
              {categoryName}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export { CategoryFilter };
