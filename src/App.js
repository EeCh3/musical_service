// import './fonts and style/css/style.css';
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";

import Wrapper from "./components/Wrapper/Wrapper.jsx";
import Container from "./components/Container/Container.jsx";
import Main from "./components/Main/Main.jsx";
import MainNav from "./components/mainNav/mainNav.jsx";
import CenterBlock from "./components/centerBlock/centerBlock.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";
import MusicPlayer from "./components/musicPlayer/musicPlayer.jsx";

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
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <Container>
          <AppRoutes/>
            <Main>
              <MainNav/>
              <CenterBlock/>
              <Sidebar/>
              <MusicPlayer/>
            </Main>
        </Container>
      </Wrapper>
    </>
   )
}

export default App;
