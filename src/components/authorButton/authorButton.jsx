import * as S from "./authorButton";

function GenreButton({onClick, isActive}) {
  const handleButtonClick = () => {
    onClick(); 
  };
    return (
      <S.Author onClick={handleButtonClick} 
      className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>исполнителю</S.Author>
    )
}

export default GenreButton