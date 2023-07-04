/* eslint-disable react/jsx-no-constructed-context-values */
// import './fonts and style/css/style.css';
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";
import {ThemeContext, themes} from "./context/themeContext";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;

    @font-face {
      font-family: 'Stratos-Regular';
      font-style: normal;
      font-weight: 400;
      src: local('Stratos-Regular'),
          url("../fonts/Stratos-Regular.woff2") format('woff2'),
    }

    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;
  }
`;

function App() {
  const [email, setEmail] = useState(null);
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    if (currentTheme === themes.dark) {
      setCurrentTheme(themes.light);
      return;
    }

    setCurrentTheme(themes.dark);
  };

  return (

    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
            <GlobalStyle/>
        <AppRoutes email={email} setEmail={setEmail}/>
    </ThemeContext.Provider>


   )
}

export default App;
