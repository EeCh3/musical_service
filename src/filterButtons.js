/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
function FilterButtons({onClick}) {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <>
        {/* // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
        <div className="filter__title">Искать по:</div>
        <div onClick={onClick} className="filter__button button-author _btn-text">исполнителю</div>
        <div onClick={onClick} className="filter__button button-year _btn-text">году выпуска</div>
        <div onClick={onClick} className="filter__button button-genre _btn-text">жанру</div></>
    );
  }

  export default FilterButtons

