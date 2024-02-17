import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import styles from "./navbar.module.css";

const Navbar = () => {
    const isLogin = false;
    
    return (
        <nav className={styles.navbar}>
            <Link to="/">Logo</Link>
            <NavbarMenu />
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </nav>
    )
}

export default Navbar;