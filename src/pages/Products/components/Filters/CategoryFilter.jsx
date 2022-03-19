import { useFilter } from "../../../../context/data/FilterContext";

const CategoryFilter = () => {
  const { state, dispatch } = useFilter();
  const { jordans, vapor, footballShoes, clubMerch } = state;

  return (
    <div className="category-container">
      <h3 className="category-title">Category</h3>
      <div className="checkbox">
        <label htmlFor="Football-Shoes">
          <input
            id="Football-Shoes"
            type="checkbox"
            checked={footballShoes}
            onChange={() => {
              dispatch({ type: "FOOTBALL_SHOES", payload: !footballShoes });
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
            checked={jordans}
            onChange={() => {
              dispatch({ type: "JORDANS", payload: !jordans });
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
            checked={clubMerch}
            onChange={() => {
              dispatch({ type: "CLUB_MERCH", payload: !clubMerch });
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
            checked={vapor}
            onChange={() => {
              dispatch({ type: "VAPOR", payload: !vapor });
            }}
          />
          Vapor
        </label>
      </div>
    </div>
  );
};

export { CategoryFilter };
