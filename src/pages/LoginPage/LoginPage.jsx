import { useDispatch, useSelector } from "react-redux";

import LoginForm from "../../components/LoginForm/LoginForm";

import { login } from "../../redux/auth/auth-operations";
import { Loader } from "../../components/Loader/Loader";

import { selectAuthLoading, selectAuthError } from "../../redux/auth/auth-selectors";

const LoginPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);

    const dispatch = useDispatch();

    const handleLogin = body => {
        dispatch(login(body));
    }

    return (
        <div>
            {/* <h1>Login</h1> */}
            {authLoading && <Loader />}
            <LoginForm onSubmit={handleLogin}/>
            {authError && <p style={{ color: "red" }}>{authError}</p>}
        </div>
    )
}

export default LoginPage;