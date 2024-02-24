import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import { Loader } from "../Loader/Loader";

import styles from "./shared-layout.module.css"

const SharedLayout = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>            
        </div>
    )
}

export default SharedLayout;