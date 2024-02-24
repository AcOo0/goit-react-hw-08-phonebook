import { useSelector } from "react-redux";
import NavbarMenu from "./NavbarMenu/NavbarMenu";
import NavbarAuth from "./NavbarAuth/NavbarAuth";
import NavbarUser from "./NavbarUser/NavbarUser";

import { selectIsLogin } from "../../redux/auth/auth-selectors";

import styles from "./navbar.module.css";

const Navbar = () => {
    const isLogin = useSelector(selectIsLogin);
        
    return (
        <nav className={styles.navbar}>
            {/* <Link to="/" className={styles.link}>Home</Link> */}
            <NavbarMenu />
            {isLogin ? <NavbarUser /> : <NavbarAuth />}
        </nav>
    )
}

export default Navbar;