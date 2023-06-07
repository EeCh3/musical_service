/* eslint-disable react/self-closing-comp */
import * as S from "./registerButton.style";

function RegisterButton({onClick, style}) {
  return (
    <S.RegisterButton style={style} onClick={onClick}>Зарегистрироваться</S.RegisterButton>
  );
}

export default RegisterButton