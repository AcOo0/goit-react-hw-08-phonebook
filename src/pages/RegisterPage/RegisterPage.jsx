import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import RegisterForm from "../../components/RegisterForm/RegisterForm";

import { signup } from "../../redux/auth/auth-operations";
import { Loader } from "../../components/Loader/Loader";

import { selectAuthLoading, selectAuthError, selectIsLogin } from "../../redux/auth/auth-selectors";

const RegisterPage = () => {
    const authLoading = useSelector(selectAuthLoading);
    const authError = useSelector(selectAuthError);
    const isLogin = useSelector(selectIsLogin);

    const dispatch = useDispatch();

    const handleSignup = body => {
        dispatch(signup(body));
    }

    if (isLogin) {
        return <Navigate to="/contacts" />
    }

    return (
        <main>
            <h1>Please Sing Up</h1>
            {authLoading && <Loader />}
            <RegisterForm onSubmit={handleSignup} />
            {authError && <p style={{ color: "red" }}>{authError}</p>}
        </main>
    )
}

export default RegisterPage;