/* eslint-disable react/self-closing-comp */
import { useState } from "react";

import logo from "../../fonts and style/img/logo.png";
import Burger from "../burger/burger";
import BurgerMenu from "../burgerMenu/burgerMenu";

import * as S from "./mainNav.style";

function MainNav() {
  const [visible, setVisible] = useState(false)
  const toggleVisibility = () => setVisible(!visible)
  
    return (
      <S.Nav>
        <S.NavLogo>
          <S.LogoImage src={logo} alt="logo"></S.LogoImage>
        </S.NavLogo>
        <Burger onClick = {toggleVisibility} />
      {visible && <BurgerMenu/>}
      </S.Nav>
    );
  }

  export default MainNav



  