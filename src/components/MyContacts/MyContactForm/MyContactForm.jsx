import { useState } from "react";
import { useDispatch } from 'react-redux';
import { nanoid } from "nanoid";

import { addContact } from "../../../redux/contacts/contacts-operations.js";

import styles from './my-contact-form.module.css'

const INITIAL_STATE = {
    contacts: [],
    filter: '',
    name: '',
    number: ''
};

const MyContactForm = () => {
    const [state, setState] = useState({ ...INITIAL_STATE });
    const dispatch = useDispatch();

    const onAddContact = (data) => {
        dispatch(addContact(data));
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setState({
            ...state,
            [name]: value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddContact({ ...state });
            reset();
    };

    const reset = () => {
        setState({ ...INITIAL_STATE });
    };

    
    const contactNameId = nanoid();
    const contactPhoneId = nanoid();
    
    const { name, number } = state;

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formElements}>
                <label htmlFor={contactNameId}>Name</label>
                <input
                    value={name}
                    onChange={handleChange}
                    id={contactNameId}
                    className={styles.input}
                    name="name"
                    required
                    type="text"
                    placeholder="Name" />
            </div>
            <div className={styles.formElements}>
                <label htmlFor={contactPhoneId}>Phone</label>
                <input
                    value={number}
                    onChange={handleChange}
                    id={contactPhoneId}
                    className={styles.input}
                    name="number"
                    required
                    pattern="^[+0-9\-\(\)\s]+$"
                    type="tel"
                    placeholder="Phone" />
            </div>
            <button className={styles.btn} type="submit">Add contact</button>
        </form>
    );
}

export default MyContactForm;