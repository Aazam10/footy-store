import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { RangePriceFilter } from "./Filters/RangePriceFilter";
import { CategoryFilter } from "./Filters/CategoryFilter";
import { RatingFilter } from "./Filters/RatingFilter";

const Filters = () => {
  return (
    <aside className="product-filter-container">
      <div className="filter-header">
        <h3 className="filter-title">Filter</h3>
        <p className="filter-reset">Clear</p>
      </div>
      <SortPriceFilter />
      <RangePriceFilter />
      <CategoryFilter />
      <RatingFilter />
    </aside>
  );
};

export { Filters };
