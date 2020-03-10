import React from 'react';

interface Contact
{
    id: number
    first_name: string,
    last_name: string,
    insert_date: string,
    comment: string,
    want_to_be_contacted: boolean,
}

interface Contacts {
    contacts: Contact[];
}

const contacts = [{
    first_name: "Fredi",
    last_name: "Hurzeler",
    insert_date: "12.12.2019",
    comment: "Dies ist mein Comment",
    want_to_be_contacted: true
}];

export default contacts;
