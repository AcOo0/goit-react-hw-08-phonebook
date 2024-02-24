import { createAsyncThunk } from "@reduxjs/toolkit";

import * as contactsApi from "../../api/contacts-api";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll",
    async (_, { rejectWithValue }) => {
        try {
            const data = await contactsApi.requestFetchContacts();
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    "contacts/add",
    async (body, { rejectWithValue }) => {
        try {
            const data = await contactsApi.requestAddContact(body);
            return data;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    },
    {
        condition: ({name, number}, { getState }) => {
            const { contacts } = getState();
            const normalizedName = name.toLowerCase();
            const normalizedPhone = number.trim();
        
            const dublicate = contacts.items.find(item => {
                const normalizeCurrentName = item.name.toLowerCase();
                const normalizeCurrentPhone = item.number.trim();
                return (normalizeCurrentName === normalizedName || normalizeCurrentPhone === normalizedPhone)
            })

            if (dublicate) {
                alert(`${name} or Number: ${number} is already in contacts.`);
                return false;
            }
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/delete",
    async (id, { rejectWithValue }) => {
        try {
            await contactsApi.requestDeleteContact(id);
            return id;
        }
        catch (error) {
            return rejectWithValue(error.message);
        }
    }
);