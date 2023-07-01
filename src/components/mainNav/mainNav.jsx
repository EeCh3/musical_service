/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { useThemeContext} from "../../context/themeContext";

import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";
import ThemeButton from '../themeButton/themeButton';

import * as S from "./mainNav.style";

function MainNav() {
  const { theme } = useThemeContext();

  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  
    return (
      <S.Nav theme={theme}>
        <S.NavLogo>
          <S.LogoImage theme={theme} src={theme.navLogoImage} alt="logo"></S.LogoImage>
        </S.NavLogo>
        <Burger onClick = {toggleVisibility} />
      {visible && <BurgerMenu/>}
      <ThemeButton/>
      </S.Nav>
    );
  }

  export default MainNav



  