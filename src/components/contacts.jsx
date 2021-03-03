import React, { useEffect, useState } from 'react';
import { getAllAccounts } from '../services/account';

const Contacts = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetchAllContacts()
    }, [])

    async function fetchAllContacts() {
        const { data } = await getAllAccounts();
        setContacts(data)
    }

    return <>
        <div style={{ width: '250px' }}>
            <div style={{ textAlign: 'center' }}>
                <h3>Contacts</h3>
                {
                    contacts.map(contact => <p>{contact.account}</p>)
                }
            </div>
        </div>
    </>
}

export default Contacts;