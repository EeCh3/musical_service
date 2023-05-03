/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import FilterButtons from "./filterButtons"
import FilterOptions from "./filterOptions";

function FilterBlock() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

    return (
      <div className="centerblock__filter filter">
        <FilterButtons onClick={toggleVisibility}/>
        {visible && <FilterOptions/>}
      </div>
    );
  };

export default FilterBlock;
