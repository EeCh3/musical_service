function GenreButton({onClick}) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={onClick} className="filter__button button-genre _btn-text">жанру</div>
    );
  }

  export default GenreButton