import * as S from "./yearButton";

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