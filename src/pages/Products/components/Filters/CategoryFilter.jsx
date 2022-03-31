import { useFilter } from "../../../../context/data/FilterContext";
import { useProduct } from "../../../../context/data/ProductContext";

const CategoryFilter = () => {
  const { state, dispatch } = useFilter();
  const { categories } = useProduct();
  // const { jordans, vapor, footballShoes, clubMerch } = state;
  const { category } = state;
  console.log(state.category);
  // console.log(categories);

  return (
    <div className="category-container">
      <h3 className="category-title">Category</h3>

      {categories.map(({ _id, categoryName }) => {
        return (
          <div className="checkbox">
            <label htmlFor={categoryName}>
              <input
                id={_id}
                type="checkbox"
                checked={category.includes(categoryName)}
                // value={"FootballShoes"}
                onChange={(e) => {
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

      {/* <div className="checkbox">
        <label htmlFor="Football-Shoes">
          <input
            id="Football-Shoes"
            type="checkbox"
            checked={category.includes("FootballShoes")}
            value={"FootballShoes"}
            onChange={(e) => {
              dispatch({ type: "CATEGORIES", payload: e.target.value });
            }}
          />
          Football Shoes
        </label>
      </div>
      <div className="checkbox">
        <label htmlFor="jordans">
          <input
            id="jordans"
            type="checkbox"
            checked={category.includes("Jordans")}
            value={"Jordans"}
            onChange={(e) => {
              dispatch({ type: "CATEGORIES", payload: e.target.value });
            }}
          />
          Jordans
        </label>
      </div>
      <div className="checkbox">
        <label htmlFor="club-merch">
          <input
            id="club-merch"
            type="checkbox"
            checked={category.includes("ClubMerch")}
            value={"ClubMerch"}
            onChange={(e) => {
              dispatch({ type: "CATEGORIES", payload: e.target.value });
            }}
          />
          Club Merch
        </label>
      </div>
      <div className="checkbox">
        <label htmlFor="vapor">
          <input
            id="vapor"
            type="checkbox"
            checked={category.includes("VaporShoes")}
            value={"VaporShoes"}
            onChange={(e) => {
              dispatch({ type: "CATEGORIES", payload: e.target.value });
            }}
          />
          Vapor
        </label>
      </div> */}
    </div>
  );
};

export { CategoryFilter };
