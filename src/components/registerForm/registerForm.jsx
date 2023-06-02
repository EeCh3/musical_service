/* eslint-disable react/self-closing-comp */
import * as S from "../loginForm/loginForm.style";
import Wrapper from "../Wrapper/Wrapper";
import Container from "../Container/Container";
import Input from "../loginInput/loginInput";
import RegisterButton from "../registerButton/registerButton";

function RegisterForm() {
    return (
      <Wrapper>
        <Container>
          <S.LoginBox>
            <Input></Input>
            <Input></Input>
            <Input></Input>
            <RegisterButton></RegisterButton>
          </S.LoginBox>
        </Container>
      </Wrapper>
    );
  }
  
  export default RegisterForm