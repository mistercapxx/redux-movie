import { useFilter } from "../context/FilterContext";
import "../styles/FilterControls.scss";

const FilterControls = () => {
  const { setFilter } = useFilter(); //using shortcut from FilterContext and grab setFilter

  return (
    <div className="filter-controls-container">
      <div className="filter-button">
        <button onClick={() => setFilter("ALL")}>All</button>
        <button onClick={() => setFilter("WATCHED")}>Watched</button>
        <button onClick={() => setFilter("UNWATCHED")}>Unwatched</button>
      </div>
    </div>
  );
};

export default FilterControls;
