/* eslint-disable react/self-closing-comp */
import * as S from "./input.style";

function LoginInput({setUser, placeholder, value, onChange}) {
  return (
    <S.LoginInput placeholder={placeholder} value={value} onChange={onChange} setUser={setUser}></S.LoginInput>
  );
}

export default LoginInput