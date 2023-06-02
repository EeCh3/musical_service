/* eslint-disable react/self-closing-comp */
import * as S from "./loginButton.style";

function LoginButton({onClick}) {
  return (
    <S.LoginButton onClick={onClick}>Войти</S.LoginButton>
  );
}

export default LoginButton