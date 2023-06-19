import * as S from "./themeButton.style";
import { useThemeContext } from "../../context/themeContext";


function ThemeButton() {
    const { theme } = useThemeContext();
    const { toggleTheme } = useThemeContext();
return(
    <S.ThemeButton onClick={toggleTheme} theme={theme}><img src={theme.themeButtonImg} alt="theme switcher" /></S.ThemeButton>    
)}

export default ThemeButton