import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

import { selectIsLogin, selectIsToken } from "../../redux/auth/auth-selectors";
import { Loader } from "../Loader/Loader";

const PablicRoute = () => {
    const isLogin = useSelector(selectIsLogin);
    const token = useSelector(selectIsToken);

    if (!isLogin && token) { 
        return <Loader/>
    }

    if (isLogin) {
        return <Navigate to="/contacts"/>
    }
    return <Outlet/>
}

export default PablicRoute;