/* eslint-disable react/self-closing-comp */
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import * as S from "./loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../input/Input";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";
import logoBlack from "../../fonts and style/img/logo_black.png"

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
            <S.LogoDiv>
              <S.LogoBlack src={logoBlack} alt="logoBlack"></S.LogoBlack> 
            </S.LogoDiv>
            <S.InputsDiv>
              <Input placeholder="Логин" value={username} onChange={handleUsernameChange}></Input>
              <Input placeholder="Пароль" value={password} onChange={handlePasswordChange}></Input> 
            </S.InputsDiv>
            <S.ButtonsDiv>
              <LoginButton onClick={handleLogin}>Войти</LoginButton>
              <RegisterButton page="login" onClick={handleRegister}>Зарегистрироваться</RegisterButton> 
            </S.ButtonsDiv>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default LoginForm