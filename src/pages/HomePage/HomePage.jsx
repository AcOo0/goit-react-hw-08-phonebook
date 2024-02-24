import { Link } from "react-router-dom";
import styles from "./home.module.css"

const HomePage = () => {
    return (
        <div className={styles.wrap}>
            <h1>Welcome to your Phonebook</h1>
        </div>
    )
}

export default HomePage;