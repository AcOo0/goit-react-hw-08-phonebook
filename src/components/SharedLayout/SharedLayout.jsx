import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import { Loader } from "../Loader/Loader";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>            
        </>
    )
}

export default SharedLayout;