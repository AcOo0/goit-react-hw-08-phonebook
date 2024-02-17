import styles from "./navbar-user.module.css";

const NavbarUser = () => {
    return (
        <div className={styles.block}>
            Email
            |
            <button>Logout</button>
        </div>
    )
}

export default NavbarUser;