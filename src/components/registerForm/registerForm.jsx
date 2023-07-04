/* eslint-disable no-alert */
/* eslint-disable react/self-closing-comp */
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSignupMutation} from '../../services/api';


import * as S from "../loginForm/loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../input/Input";
import RegisterButton from "../registerButton/registerButton";
import logoBlack from "../../fonts and style/img/logo_black.png"

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passRep, setPassRep] = useState('');
  const navigate = useNavigate();

  const [postReg, {isSuccess, isError }] = useSignupMutation()

  const handleUsernameChange = (event) => {
    setEmail(event.target.value);
    };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    };

  const handlePasswordRep = (event) => {
    setPassRep(event.target.value);
    };  

    const handleRegister = async () => {
      if(password !== passRep){
          alert('Пароль не совпадает')           
          return
      }
          await postReg({
          "email": email,
          "password": password,
          "username": email,
      }).unwrap()
  }

  if (isError) return alert('Ошибка')
  if (isSuccess) navigate('/login');

    return (
      <Wrapper>
        <Container>
          <S.LoginBox>
            <S.LogoDiv>
              <S.LogoBlack src={logoBlack} alt="logoBlack"></S.LogoBlack> 
            </S.LogoDiv>
            <S.InputsDiv>
              <Input placeholder="Логин" value={email} onChange={handleUsernameChange}></Input>
              <Input placeholder="Пароль" value={password} onChange={handlePasswordChange}></Input> 
              <Input placeholder="Повторите пароль" value={passRep} onChange={handlePasswordRep}></Input>
            </S.InputsDiv>
            <RegisterButton style={{ background: '#580EA2', color: '#FFFFFF'}} onClick={handleRegister}></RegisterButton>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default RegisterForm