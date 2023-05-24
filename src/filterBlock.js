/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
// import styled from "styled-components";
import FilterOptions from "./filterOptions";
import AuthorButton from "./authorButton";
import YearButton from "./yearButton";
import GenreButton from "./genreButton";
import * as S from "./styles";

function FilterBlock() {
  const [visible, setVisible] = useState(null);

  const handleButtonClick = (filter) => {
    setVisible((currentVisible) => (currentVisible === filter ? null : filter));
  };

  // const CenterBlockFilter = styled.div`
  // position: relative;
  //   z-index: 0;
  //   display: -webkit-box;
  //   display: -ms-flexbox;
  //   display: flex;
  //   -webkit-box-orient: horizontal;
  //   -webkit-box-direction: normal;
  //       -ms-flex-direction: row;
  //           flex-direction: row;
  //   -webkit-box-align: center;
  //       -ms-flex-align: center;
  //           align-items: center;
  //   margin-bottom: 51px;
  //   gap: 10px;
  // `;

  // const FilterTitle = styled.div`
  //   font-style: normal;
  //   font-weight: 400;
  //   font-size: 16px;
  //   line-height: 24px;
  //   margin-right: 15px;
  // `;

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
