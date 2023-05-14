function AuthorButton({onClick, isActive }) {
  const handleButtonClick = () => {
    onClick(); 
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div onClick={handleButtonClick} 
    className = {`filter__button button-author ${isActive ? '_btn-text_active _btn-icon_active' : ''}`}>исполнителю</div>
  );
}

export default AuthorButton