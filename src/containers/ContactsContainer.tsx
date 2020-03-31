import React, {useState} from 'react';
import {ContactIndex} from "../components/contact/ContactIndex";
import {Contact} from "../models/contact";
import {QuestionType} from "../models/questionType";
import {ContactForm} from "../components/contact/ContactForm";

export const ContactsContainer: React.FC = () => {
    const defaultContacts: Contact[] = [
        {
            id: 0,
            first_name: 'Fredi',
            last_name: 'Hurzeler',
            insert_date: new Date().getTime(),
            comment: "huhu",
            want_to_be_contacted: true,
            question_type: QuestionType.SUPPORT,
            email: 'dahu@huhu.ch'
        },
        {
            id: 1,
            first_name: 'Lisa',
            last_name: 'Hübschi',
            insert_date: new Date().getTime(),
            comment: "Dies ist mein dings",
            want_to_be_contacted: false,
            question_type: QuestionType.TECHNICAL_QUESTION,
            email: 'asdf@asdf.ch'
        },
        {
            id: 2,
            first_name: 'Ariel',
            last_name: 'Fireasd',
            insert_date: new Date().getTime(),
            comment: "ASDasdasda asdasd a",
            want_to_be_contacted: true,
            question_type: QuestionType.TECHNICAL_QUESTION,
            email: 'uziu@asdf.ch'
        }
    ];

    const [contacts, setContacts] = useState<Contact[]>(defaultContacts);

    const createContact = (contact: Contact) => {
        const newContact = {...contact, id: new Date().getTime()};
        const newContacts = [...contacts, newContact];
        setContacts(newContacts);
    }

    const updateContact = (contact: Contact) => {
        //console.log(contact);
        const newContacts = contacts.map((c) => (c.id === contact.id) ? contact : c);
        setContacts(newContacts);
    }

    const deleteContact = (contactId: number) => {
        const newContacts = contacts.filter(u => u.id !== contactId);
        setContacts(newContacts);
    }

    return (
        <>
            <ContactForm saveContact={createContact}/>
            <ContactIndex contacts={contacts}
                          deleteAction={deleteContact}
                          updateAction={updateContact}/>
        </>
    );
}
