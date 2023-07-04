/* eslint-disable react/jsx-no-constructed-context-values */
import {useThemeContext} from "../../context/themeContext";
import * as S from "./Main.style";


function Main({ children }) {
  const { theme } = useThemeContext();
  
    return (

      <S.Main style={{
        backgroundColor: theme.background,
        color: theme.color,
      }}>{children}</S.Main>

    )
}

export default Main