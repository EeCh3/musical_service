/* eslint-disable react/self-closing-comp */
import * as S from "./loginWindow";
import Input from "../loginInput/loginInput.jsx";
import LoginButton from "../loginButton/loginButton.jsx";
import RegisterButton from "../registerButton/registerButton.jsx";

function LoginWindow() {
    return (
      <S.LoginBox>
        <Input></Input>
        <Input></Input>
        <LoginButton></LoginButton>
        <RegisterButton></RegisterButton>
      </S.LoginBox>
    );
  }
  
  export default LoginWindow