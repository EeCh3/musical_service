// import './fonts and style/css/style.css';
import { createGlobalStyle } from "styled-components";
import * as S from "./styles";

import MainNav from "./mainNav";
import CenterBlock from "./centerBlock";
import Sidebar from "./sidebar";
import MusicPlayer from "./musicPlayer";


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Stratos-Regular';
    font-style: normal;
    font-weight: 400;
    src: local('Stratos-Regular'),
      url("../fonts/Stratos-Regular.woff2") format('woff2'),

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
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav/>
            <CenterBlock/>
            <Sidebar/>
            <MusicPlayer/>
          </S.Main>
        </S.Container>
      </S.Wrapper>

    </>

   )
   }

export default App;
