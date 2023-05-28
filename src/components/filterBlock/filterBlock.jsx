/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import FilterOptions from "../filterOptions/filterOptions.jsx";
import AuthorButton from "../authorButton/authorButton.jsx";
import YearButton from "../yearButton/yearButton.jsx";
import GenreButton from "../genreButton/genreButton.jsx";
import * as S from "./filterBlock";

function FilterBlock() {
    const [visible, setVisible] = useState(null);
  
    const handleButtonClick = (filter) => {
      setVisible((currentVisible) => (currentVisible === filter ? null : filter));
    };

  return (
    <S.CenterBlockFilter>
      <S.FilterTitle>Искать по:</S.FilterTitle>
      <div>
        <AuthorButton
          isActive={visible === "author"}
          onClick={() => {
            handleButtonClick("author");
          }}
        />
        {visible === "author" && <FilterOptions />}
      </div>
      <div>
        <YearButton
          isActive={visible === "year"}
          onClick={() => {
            handleButtonClick("year");
          }}
        />
        {visible === "year" && <FilterOptions />}
      </div>
      <div>
        <GenreButton
          isActive={visible === "genre"}
          onClick={() => {
            handleButtonClick("genre");
          }}
        />
        {visible === "genre" && <FilterOptions />}
      </div>
    </S.CenterBlockFilter>
  );
}

export default FilterBlock;
