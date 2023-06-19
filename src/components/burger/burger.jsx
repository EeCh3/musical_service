/* eslint-disable react/self-closing-comp */
import * as S from "./burger.style";
import { useThemeContext} from "../../context/themeContext";

function Burger({onClick}) {
  const { theme } = useThemeContext();
  return (
    <S.NavBurger onClick={onClick}>
      <S.BurgerLine theme={theme}></S.BurgerLine>
      <S.BurgerLine theme={theme}></S.BurgerLine>
      <S.BurgerLine theme={theme}></S.BurgerLine>
    </S.NavBurger>
  );
}

export default Burger

