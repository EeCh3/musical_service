import React, {useContext} from "react";
import logo from "../fonts and style/img/logo.png";
import logoBlack from "../fonts and style/img/logo_black.png";
import lightThemeImg from "../fonts and style/img/light_theme.png"
import darkThemeImg from "../fonts and style/img/dark_theme.png"

export const themes = {
    light: {
      color: '#000000',
      background: "#FFFFFF",
      navBackgroundColor : "#F6F5F3",
      navLogoColor: "#000000",
      burgerLineColor: "#000000",
      burgerItemColor: "#000000",
      trackAuthorColor: "#000000",
      trackTitleColor: "#000000",
      sidebarPersonalNameColor: "#000000",
      trackPlayAuthorColor: "#000000",
      trackPlayAlbumColor: "#000000",
      navLogoImage: logoBlack,
      themeButtonBorderColor: "#181818",
      themeButtonImg: lightThemeImg
    },
    dark: {
      color: '#FFFFFF',
      background: "#181818",
      navBackgroundColor : "#181818",
      navLogoColor: "#181818",
      burgerLineColor: "#D3D3D3",
      burgerItemColor: "#FFFFFF",
      trackAuthorColor: "#FFFFFF",
      trackTitleColor: "#FFFFFF",
      sidebarPersonalNameColor: "#FFFFFF",
      trackPlayAuthorColor: "#FFFFFF",
      trackPlayAlbumColor: "#FFFFFF",
      navLogoImage: logo,
      themeButtonBackgroundColor: "#181818",
      themeButtonBorderColor: "#FFFFFF",
      themeButtonImg: darkThemeImg
    },
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });

  export const useThemeContext = () => {
    const theme = useContext(ThemeContext);
    
    if(!theme) return theme.dark;
  
    return theme;
  }

  export default ThemeContext;