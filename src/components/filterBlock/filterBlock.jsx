/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import FilterOptions from "../filterOptions/filterOptions";
import AuthorButton from "../authorButton/authorButton";
import YearButton from "../yearButton/yearButton";
import GenreButton from "../genreButton/genreButton";
import * as S from "./filterBlock.style";

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
