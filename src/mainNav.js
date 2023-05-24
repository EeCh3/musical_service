/* eslint-disable react/self-closing-comp */
import { useState } from "react";
// import styled from "styled-components";
import logo from "./fonts and style/img/logo.png";
import Burger from "./burger";
import BurgerMenu from "./burgerMenu";

// const Nav = styled.nav`
//   width: 244px;
//   background-color: #181818;
//   padding: 20px 0 20px 36px;
// `;

// const NavLogo = styled.div`
//   width: 113.33px;
//   height: 43px;
//   padding: 13px 0 13px 0;
//   background-color: transparent;
//   margin-bottom: 20px;
// `;

// const LogoImage = styled.img`
//   width: 113.33px;
//   height: 17px;
//   color: #181818;
// `;

import * as S from "./styles";

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



  