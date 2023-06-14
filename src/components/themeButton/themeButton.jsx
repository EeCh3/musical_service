// import { useContext } from "react";
// import * as S from "./themeButton.style";
// import ThemeContext from "../../context/themeContext";

// function ThemeButton() {
//     const currentTheme = useContext(ThemeContext)

// return(
//     <ThemeContext.Provider value={currentTheme}>
//         <S.ThemeButton>ТЕМА</S.ThemeButton>    
//     </ThemeContext.Provider>
// )}

// export default ThemeButton

import * as S from "./themeButton.style";
import { useThemeContext } from "../../context/themeContext";

function ThemeButton() {
    const { toggleTheme } = useThemeContext();
return(
    <S.ThemeButton onClick={toggleTheme}>ТЕМА</S.ThemeButton>    
)}

export default ThemeButton