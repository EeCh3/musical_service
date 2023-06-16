import * as S from "./themeButton.style";
import { useThemeContext } from "../../context/themeContext";

function ThemeButton() {
    const { toggleTheme } = useThemeContext();
return(
    <S.ThemeButton onClick={toggleTheme}>ТЕМА</S.ThemeButton>    
)}

export default ThemeButton