function Burger({onClick}) {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        <div onClick={onClick} className="nav__burger burger">
            <span className="burger__line" />
            <span className="burger__line" />
            <span className="burger__line" />
        </div>
      );
    }
  
    export default Burger