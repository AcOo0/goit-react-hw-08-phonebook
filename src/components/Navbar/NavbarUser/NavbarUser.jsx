import { useSelector, useDispatch } from "react-redux";

import { logout } from "../../../redux/auth/auth-operations";

import { selectUser } from "../../../redux/auth/auth-selectors";

import styles from "./navbar-user.module.css";

const NavbarUser = () => {
    const { email } = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const onLogout = () => dispatch(logout());

    return (
        <div className={styles.block}>
            {email}
            <button onClick={onLogout} className={styles.logout_btn}>Logout</button>
        </div>
    )
}

export default NavbarUser;