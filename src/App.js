// import './fonts and style/css/style.css';
import { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "./routes";

// import Wrapper from "./components/Wrapper/Wrapper";
// import Container from "./components/Container/Container";
// import Main from "./components/Main/Main";
// import MainNav from "./components/mainNav/mainNav";
// import CenterBlock from "./components/centerBlock/centerBlock";
// import Sidebar from "./components/sidebar/sidebar";
// import MusicPlayer from "./components/musicPlayer/musicPlayer";

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

// function App() {
//   return (
//     <>
//       <GlobalStyle/>
//       <Wrapper>
//         <Container>
//         <AppRoutes/>
//             <Main> 
//               <MainNav/>
//               <CenterBlock/>
//               <Sidebar/>
//               <MusicPlayer/>
//             </Main>
//         </Container>
//       </Wrapper>
//     </>
//    )
// }

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <GlobalStyle/>
        <AppRoutes user={user} setUser={setUser}/>
    </>
   )
}

export default App;
