import { NavLink } from "react-router-dom";

import styles from "./navbar-menu.module.css"

const NavbarMenu = () => {
    return (
        <ul className={styles.menu}>
            <li>
                <NavLink className={styles.link} to="/" >Home</NavLink>
            </li>
            <li>
                <NavLink className={styles.link} to="/contacts" >Contacts</NavLink>
            </li>
        </ul>
    )
}

export default NavbarMenu;