/* eslint-disable react/self-closing-comp */
import { useState } from "react";

import * as S from "../loginForm/loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../input/Input";
import RegisterButton from "../registerButton/registerButton";
import logoBlack from "../../fonts and style/img/logo_black.png"

function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

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
              <Input placeholder="Повторите пароль" value={password} onChange={handlePasswordChange}></Input>
            </S.InputsDiv>
            <RegisterButton style={{ background: '#580EA2', color: '#FFFFFF'}} ></RegisterButton>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default RegisterForm