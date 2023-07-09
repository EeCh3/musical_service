import { useNavigate } from "react-router-dom";
import * as S from "./burgerMenu.style";
import { useThemeContext} from "../../context/themeContext";


function BurgerMenu() {
  const navigate = useNavigate()
  
  const handleMyPlaylist = (event) => {
    event.preventDefault();
    navigate('/mytracks')
  }

  const { theme } = useThemeContext();
    return (
      <S.NavMenu>
        <S.MenuList>
          <S.MenuItem>
            <S.MenuLink theme={theme} href="/mytracks">Главное</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink theme={theme} onClick={handleMyPlaylist}>Мой плейлист</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink theme={theme} href="http://">Войти</S.MenuLink>
          </S.MenuItem>
        </S.MenuList>
      </S.NavMenu>
    );
  }

  export default BurgerMenu
