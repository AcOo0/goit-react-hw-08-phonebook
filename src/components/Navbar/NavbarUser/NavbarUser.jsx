import { useSelector } from "react-redux";

import { selectUser } from "../../../redux/auth/auth-selectors";

import styles from "./navbar-user.module.css";

const NavbarUser = () => {
    const { email } = useSelector(selectUser);

    return (
        <div className={styles.block}>
            {email}
            <button>Logout</button>
        </div>
    )
}

export default NavbarUser;