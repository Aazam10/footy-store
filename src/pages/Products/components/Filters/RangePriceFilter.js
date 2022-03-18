import { useFilter } from "../../../../context/data/FilterContext";

const RangePriceFilter = () => {
  const { state, dispatch } = useFilter();
  const { rangeValue } = state;

  return (
    <div className="price-range-container">
      <h3 className="price-title">Price</h3>
      <div className="slider-container">
        <div className="price-range">
          <p>0</p>
          <p>2500</p>
          <p>5000</p>
        </div>
        <input
          type="range"
          name="slider"
          className="slider"
          min="0"
          max="5000"
          value={rangeValue}
          onChange={(e) => {
            dispatch({ type: "RANGE_INPUT", payload: e.target.value });
          }}
        />
      </div>
    </div>
  );
};

export { RangePriceFilter };
