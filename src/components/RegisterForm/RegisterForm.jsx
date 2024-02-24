import { useState, useId } from "react"

import styles from "./register-form.module.css"

const INITIAL_STATE = {
    name: '',
    email: '',
    password: ''
};

const RegisterForm = ({ onSubmit }) => {
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
        // reset();
    };

    // const reset = () => {
    //     setState({ ...INITIAL_STATE });
    // };

    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const { name, email, password } = state;

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.block}>
                {/* <label htmlFor={nameId}>Name:</label> */}
                <input
                    value={name}
                    className={styles.input}
                    onChange={handleChange}
                    id={nameId}
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                />
            </div>
            <div className={styles.block}>
                {/* <label htmlFor={emailId}>Email:</label> */}
                <input
                    value={email}
                    className={styles.input}
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
                    value={password}
                    className={styles.input}
                    onChange={handleChange}
                    id={passwordId}
                    name="password"
                    required
                    type="password"
                    placeholder="Password" />
            </div>
            <button type="submit" className={styles.btn}>Register</button>
        </form>
    )
};

export default RegisterForm;