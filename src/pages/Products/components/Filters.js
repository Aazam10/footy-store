import { SortPriceFilter } from "./Filters/SortPriceFilter";
import { RangePriceFilter } from "./Filters/RangePriceFilter";

const Filters = () => {
  return (
    <aside className="product-filter-container">
      <div className="filter-header">
        <h3 className="filter-title">Filter</h3>
        <p className="filter-reset">Clear</p>
      </div>
      <SortPriceFilter />
      <RangePriceFilter />
    </aside>
  );
};

export { Filters };
