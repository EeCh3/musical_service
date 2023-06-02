/* eslint-disable react/self-closing-comp */
import * as S from "./registerButton.style";

function RegisterButton({onClick}) {
  return (
    <S.RegisterButton onClick={onClick}>Зарегистрироваться</S.RegisterButton>
  );
}

export default RegisterButton