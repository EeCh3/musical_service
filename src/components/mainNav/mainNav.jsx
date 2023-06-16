/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { useThemeContext} from "../../context/themeContext";

import logo from "../../fonts and style/img/logo.png";
import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";
import ThemeButton from '../themeButton/themeButton';

import * as S from "./mainNav.style";

function MainNav() {
  const { theme } = useThemeContext();

  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  
    return (
      <S.Nav style={{
        backgroundColor: theme === 'light' ? "#F6F5F3" : theme.color,
        color: theme.color,
      }}>
        <S.NavLogo>
          <S.LogoImage src={logo} alt="logo"></S.LogoImage>
        </S.NavLogo>
        <Burger onClick = {toggleVisibility} />
      {visible && <BurgerMenu/>}
      <ThemeButton/>
      </S.Nav>
    );
  }

  export default MainNav



  