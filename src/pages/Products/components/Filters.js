import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { RangePriceFilter } from "./Filters/RangePriceFilter";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { RatingFilter } from "./Filters/RatingFilter";
import { useFilter } from "../../../context/data/FilterContext";

const Filters = () => {
  const { dispatch } = useFilter();
  return (
    <aside className="product-filter-container">
      <div className="filter-header">
        <h3 className="filter-title">Filter</h3>
        <p
          className="filter-reset"
          onClick={() => {
            dispatch({ type: "CLEAR" });
          }}
        >
          Clear
        </p>
      </div>
      <SortPriceFilter />
      <RangePriceFilter />
      <CategoryFilter />
      <RatingFilter />
    </aside>
  );
};

export { Filters };
