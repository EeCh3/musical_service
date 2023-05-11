import { useState } from "react";

function GenreButton({onClick}) {
  const [isActive, setIsActive] = useState(false);
  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick(); 
  };

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={handleButtonClick} className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>жанру</div>
    );
  }

  export default GenreButton