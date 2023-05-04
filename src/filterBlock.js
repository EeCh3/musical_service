/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import FilterOptions from "./filterOptions";
import SingerButton from "./singerButton";
import YearButton from "./yearButton";
import GenreButton from "./genreButton";

function FilterBlock() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)

    return (
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <SingerButton onClick={toggleVisibility}/>
        {visible && <FilterOptions/>}
        <YearButton onClick={toggleVisibility}/>
        {visible && <FilterOptions/>}
        <GenreButton onClick={toggleVisibility}/>
        {visible && <FilterOptions/>}
      </div>
    );
  };



export default FilterBlock;
