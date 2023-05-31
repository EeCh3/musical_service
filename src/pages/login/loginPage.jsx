import { createGlobalStyle } from "styled-components";
import LoginWindow from "../../components/loginWindow/loginWindow";

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

function LoginPage() {
    return (
        <>
        <GlobalStyle/>
        <LoginWindow/>
        </>
    )
}

export default LoginPage