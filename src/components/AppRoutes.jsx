import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import SharedLayout from "./SharedLayout/SharedLayout";
import PrivateRoute from "./PrivateRoute/PrivateRuote";
import PablicRoute from "./PablicRoute/PablicRoute";

const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MyContacts = lazy(() => import("pages/MyContactsPage/MyContactsPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import ("pages/LoginPage/LoginPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route element={<PablicRoute />}>
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                </Route>
                <Route element={<PrivateRoute />}>
                    <Route path="contacts" element={<MyContacts />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
};

export default AppRoutes;