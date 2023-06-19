import * as S from "./burgerMenu.style";
import { useThemeContext} from "../../context/themeContext";

function BurgerMenu() {
  const { theme } = useThemeContext();
    return (
      <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink theme={theme} href="http://">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink theme={theme} href="http://">Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink theme={theme} href="http://">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    );
  }

  export default BurgerMenu
