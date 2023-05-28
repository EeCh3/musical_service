/* eslint-disable react/self-closing-comp */
import * as S from "./burger";

function Burger({onClick}) {
  return (
    <S.NavBurger onClick={onClick}>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
      <S.BurgerLine></S.BurgerLine>
    </S.NavBurger>
  );
}

export default Burger

