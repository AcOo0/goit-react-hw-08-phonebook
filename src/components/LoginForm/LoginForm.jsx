import { useState, useId } from "react"

import styles from "./login-form.module.css"

const INITIAL_STATE = {
    email: '',
    password: ''
};

const LoginForm = ({ onSubmit }) => {
    const [state, setState] = useState({ ...INITIAL_STATE });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...state });
        reset();
    };

    const reset = () => {
        setState({ ...INITIAL_STATE });
    };

    const emailId = useId();
    const passwordId = useId();

    const { email, password } = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.block}>
                {/* <label htmlFor={emailId}>Email:</label> */}
                <input
                    className={styles.input}
                    value={email}
                    onChange={handleChange}
                    id={emailId}
                    name="email"
                    required
                    type="email"
                    placeholder="Email" />
            </div>
            <div className={styles.block}>
                {/* <label htmlFor={passwordId}>Password:</label> */}
                <input
                    className={styles.input}
                    value={password}
                    onChange={handleChange}
                    id={passwordId}
                    name="password"
                    required
                    type="password"
                    placeholder="Password" />
            </div>
            <button type="submit" className={styles.btn}>Login</button>
        </form>
    )
};

export default LoginForm;