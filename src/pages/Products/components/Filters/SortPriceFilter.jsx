import { useFilter } from "../../../../context/data/FilterContext";

const SortPriceFilter = () => {
  const { state, dispatch } = useFilter();
  //   console.log(state);
  const { sortBy } = state;
  //   console.log(sortBy);
  return (
    <div className="sortby-container">
      <h3 className="sortby-title">Sort By</h3>
      <div className="radio">
        <label htmlFor="high-to-low">
          <input
            id="high-to-low"
            name="sort"
            type="radio"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => {
              dispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
            }}
          />
          Price- High to Low
        </label>
      </div>
      <div className="radio">
        <label htmlFor="low-to-high">
          <input
            id="low-to-high"
            name="sort"
            type="radio"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() => {
              dispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
            }}
          />
          Price- Low to High
        </label>
      </div>
    </div>
  );
};

export { SortPriceFilter };
