import { useFilter } from "../../../../context/data/FilterContext";

const RatingFilter = () => {
  const { state, dispatch } = useFilter();

  const { ratings } = state;

  return (
    <div className="rating-container">
      <h3 className="rating-title">Ratings</h3>
      <div className="radio">
        <label htmlFor="four-star">
          <input
            id="four-star"
            name="rating"
            type="radio"
            value="4"
            checked={ratings === "4"}
            onChange={(event) => {
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          4 Stars & Above
        </label>
      </div>
      <div className="radio">
        <label htmlFor="three-star">
          <input
            id="three-star"
            name="rating"
            type="radio"
            value="3"
            checked={ratings === "3"}
            onChange={(event) => {
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          3 Stars & Above
        </label>
      </div>
      <div className="radio">
        <label htmlFor="two-star">
          <input
            id="two-star"
            name="rating"
            type="radio"
            value="2"
            checked={ratings === "2"}
            onChange={(event) => {
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          2 Stars & Above
        </label>
      </div>
      <div className="radio">
        <label htmlFor="one-star">
          <input
            id="one-star"
            name="rating"
            type="radio"
            value="1"
            checked={ratings === "1"}
            onChange={(event) => {
              dispatch({ type: "RATING", payload: event.target.value });
            }}
          />
          1 Stars & Above
        </label>
      </div>
    </div>
  );
};

export { RatingFilter };
