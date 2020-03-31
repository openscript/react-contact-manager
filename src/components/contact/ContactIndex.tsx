import React from 'react';
import {Contact} from "../../models/contact";
import {ContactForm} from './ContactForm'
import {Button, Checkbox} from "antd";

interface Props {
    contacts: Contact[]; // gleich wie users: Array<User>;
    deleteAction: (id: number) => void;
    updateAction: (contact: Contact) => void;
}

export const ContactIndex: React.FC<Props> = (props) => {

    return (
    <table>
        <thead>
        <tr>
            <th>Edit</th>
            <th>Delete</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Insert Date</th>
            <th>Comment</th>
            <th>Want to be contacted</th>
            <th>Question Type</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
            {props.contacts.map(contact => (
                <tr key={contact.id}>
                    <td><ContactForm saveContact={props.updateAction} contact={contact}/></td>
                    <td><Button onClick={() => props.deleteAction(contact.id)}>Delete</Button></td>
                    <td>{contact.first_name}</td>
                    <td>{contact.last_name}</td>
                    <td>{contact.insert_date}</td>
                    <td>{contact.comment}</td>
                    <td><Checkbox checked={contact.want_to_be_contacted} disabled /></td>
                    <td>{contact.question_type}</td>
                    <td>{contact.email}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
}
