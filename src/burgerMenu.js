// import styled from "styled-components";

// const NavMenu = styled.div`
//   display: block;
//   visibility: visible;
// `;

// const MenuList = styled.ul`
//   padding: 18px 0 10px 0;
// `;

// const MenuItem = styled.li`
//   padding: 5px 0;
//   margin-bottom: 16px;
// `;

// const MenuLink = styled.a`
//   color: #FFFFFF;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 24px;
// `;

import * as S from "./styles";

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
