// import styled from "styled-components";

// const Year = styled.div`
//   font-style: normal;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
//   border: 1px solid;
//   border-radius: 60px;
//   padding: 6px 20px;

//   &._btn-text_active {
//     border-color: #AD61FF;
//     color: #AD61FF;
//     cursor: pointer;
//   }

//   &._btn-icon_active {
//     fill: transparent;
//     stroke: #FFFFFF;
//     cursor: pointer;
//   }
// `;
import * as S from "./styles";

function GenreButton({onClick, isActive}) {
  const handleButtonClick = () => {
    onClick(); 
  };
    return (
      <S.Year onClick={handleButtonClick} 
      className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>году выпуска</S.Year>
    )
}

export default GenreButton