/* eslint-disable import/prefer-default-export */
import LoginForm from "../../components/loginForm/loginForm";

function LoginPage( {setUser} ) {
    return (
        <LoginForm setUser={setUser}/>
    )
}

export { LoginPage }