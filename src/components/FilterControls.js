import { useFilter } from "../context/FilterContext";
import '../styles/FilterControls.scss';

const FilterControls = () => {
    const {setFilter} = useFilter();//using state from FilterContext created earlier

    return (
        <div className="filter-button">
            <button onClick={()=>setFilter('ALL')}>All</button>
            <button onClick={()=>setFilter('WATCHED')}>Watched</button>
            <button onClick={()=>setFilter('UNWATCHED')}>Unwatched</button>
        </div>
    );
};

export default FilterControls;