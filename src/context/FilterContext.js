const { createContext, useContext, useState } = require("react");

const FilterContext = createContext();
//context starts here

export const FilterProvider = ({children}) => {///component-provider
    const [filter,setFilter] = useState('ALL');
    ///filter state starts here
    return (
        <FilterContext.Provider value={{filter,setFilter}}>
            {/* ///context uses provider
            /// to pass filter state and setter to
            ///nested components */}

            {/* ////via value nested components have access
            /// to state and setter  */}
            {children}
            {/* ////children means 'all nested components inside FilterProvider' */}
            </FilterContext.Provider>
    );
};
export const useFilter = () => useContext(FilterContext);
///useFilter - easy way for components to access to FilterContext's object 
// of context - { filter, setFilter }.



///create - provider - export




