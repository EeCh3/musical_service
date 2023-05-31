/* eslint-disable react/self-closing-comp */
import * as S from "./registerButton";

function RegisterButton({onClick}) {
  return (
    <S.RegisterButton onClick={onClick}>Зарегистрироваться</S.RegisterButton>
  );
}

export default RegisterButton