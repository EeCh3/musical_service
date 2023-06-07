/* eslint-disable react/self-closing-comp */
import * as S from "./loginInput.style";

function LoginInput({setUser}) {
  return (
    <S.LoginInput placeholder="Логин" setUser={setUser}></S.LoginInput>
  );
}

export default LoginInput