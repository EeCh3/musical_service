import styled from "styled-components";

const NavMenu = styled.div`
  display: block;
  visibility: visible;
`;

const MenuList = styled.ul`
  padding: 18px 0 10px 0;
`;

const MenuItem = styled.li`
  padding: 5px 0;
  margin-bottom: 16px;
`;

const MenuLink = styled.a`
  color: #FFFFFF;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

function BurgerMenu() {
    return (
      <NavMenu>
        <MenuList>
          <MenuItem>
            <MenuLink href="http://">Главное</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="http://">Мой плейлист</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink href="http://">Войти</MenuLink>
          </MenuItem>
        </MenuList>
      </NavMenu>
    );
  }

  export default BurgerMenu
