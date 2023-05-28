import * as S from "./burgerMenu";

function BurgerMenu() {
    return (
      <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink href="http://">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink href="http://">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    );
  }

  export default BurgerMenu
