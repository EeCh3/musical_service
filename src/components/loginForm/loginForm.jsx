/* eslint-disable react/self-closing-comp */
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import LoginInput from "../loginInput/loginInput";
import PasswordInput from "../passwordInput/passwordInput";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";

function LoginForm({setUser}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

  const handleLogin = (event) => {
    event.preventDefault();
    setUser( {login: username} );
    navigate('/')
  }

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/register')
  }
    return (
      <Wrapper>
        <Container>
          <S.LoginBox>
            <LoginInput placeholder="Логин" value={username} onChange={handleUsernameChange}></LoginInput>
            <PasswordInput placeholder="Пароль" value={password} onChange={handlePasswordChange}></PasswordInput>
            <LoginButton onClick={handleLogin}>Войти</LoginButton>
            <RegisterButton onClick={handleRegister}>Зарегистрироваться</RegisterButton>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default LoginForm