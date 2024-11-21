import { useFilter } from "../context/FilterContext";

const FilterControls = () => {
    const {setFilter} = useFilter();//using state from FilterContext created earlier

    return (
        <div>
            <button onClick={()=>setFilter('ALL')}>All</button>
            <button onClick={()=>setFilter('WATCHED')}>Watched</button>
            <button onClick={()=>setFilter('UNWATCHED')}>Unwatched</button>
        </div>
    );
};

export default FilterControls;