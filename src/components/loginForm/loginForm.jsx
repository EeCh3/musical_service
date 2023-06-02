/* eslint-disable react/self-closing-comp */
import * as S from "./loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../loginInput/loginInput";
import LoginButton from "../loginButton/loginButton";
import RegisterButton from "../registerButton/registerButton";

function LoginForm() {
    return (
      <Wrapper>
        <Container>
          <S.LoginBox>
            <Input></Input>
            <Input></Input>
            <LoginButton></LoginButton>
            <RegisterButton></RegisterButton>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default LoginForm