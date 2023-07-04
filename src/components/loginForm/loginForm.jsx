/* eslint-disable no-empty-pattern */
/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useGetTokenMutation, useLoginMutation } from '../../services/api';
import { userLogin } from '../../store/userSlice';

import * as S from "./loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../input/Input";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";
import logoBlack from "../../fonts and style/img/logo_black.png"

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [postToken, {}] = useGetTokenMutation();
  const [postLogin, {}] = useLoginMutation();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

  const handleLogin = async () => {
    // event.preventDefault();
    // setUser( {login: email} );
    // navigate('/')
    await postToken({email, password}).unwrap()  
    .then ((token) => {  
        // console.log(token); 
 
        localStorage.setItem('token', token.refresh);
 
        postLogin({ email, password }) 
        .then((user) => { 
            // console.log(user) 
            dispatch(userLogin({ 
                email: user.data.email, 
                id: user.data.id, 
                token: token.refresh 
            })); 
         
            navigate('/') 
        })
        .catch(error => {
            console.log(error);
            alert(`Ошибка при получении токена.`);
        });
    })
    .catch(error => {
        console.log(error);
        alert(`Ошибка ${error.status}: ${error.data.detail}`);
    });
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
              <Input placeholder="Логин" value={email} onChange={handleEmailChange}></Input>
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