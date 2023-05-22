/* eslint-disable react/self-closing-comp */
import styled from "styled-components";

const NavBurger = styled.div`
  width: 20px;
  height: 36px;
  padding: 13px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
`;

const BurgerLine = styled.span`
  display: inline-block;
  width: 100%;
  height: 1px;
  background-color: #D3D3D3;
`;

function Burger({onClick}) {
  return (
    <NavBurger onClick={onClick}>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>
      <BurgerLine></BurgerLine>
    </NavBurger>
  );
}

export default Burger

