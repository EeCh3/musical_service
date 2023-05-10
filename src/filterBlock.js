/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import FilterOptions from "./filterOptions";
import AuthorButton from "./authorButton";
import YearButton from "./yearButton";
import GenreButton from "./genreButton";

function FilterBlock() {
  
  const [visible, setVisible] = useState(null)

  const toggleVisibility = (filter) => {
    setVisible(visible === filter ? null : filter)
  }

  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
  };


    return (
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div><AuthorButton onClick={() => {toggleVisibility("author"); handleButtonClick() }} isActive={isActive}/>
        {visible === "author" && <FilterOptions/>}</div>
        <div><YearButton onClick={() => toggleVisibility("year")}/>
        {visible === "year" && <FilterOptions/>}</div>
        <div><GenreButton onClick={() => {toggleVisibility("genre"); handleButtonClick()}}/>
        {visible === "genre" && <FilterOptions/>}</div>
      </div>
    );
  };


export default FilterBlock;
