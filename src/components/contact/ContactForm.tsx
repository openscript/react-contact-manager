import React, {useState} from 'react';
import {QuestionType} from "../../models/questionType";
import {Contact} from "../../models/contact";
import {Dialog} from "../Dialog";
import styled from '@emotion/styled';
import {Select, Button, Form, Input, Checkbox, Tabs} from "antd";

const { TextArea } = Input;

const { TabPane } = Tabs;

const CustomForm = styled.form`
    input {
      display: block;
    }
`;

interface Props {
    saveContact: (contact: Contact) => void;
    contact?: Contact;
}

export const ContactForm: React.FC<Props> = (props) => {
    const initialContact = props.contact
        ? props.contact
        : {
            id: new Date().getTime(),
            first_name: '',
            last_name: '',
            insert_date: 0,
            comment: '',
            want_to_be_contacted: false,
            question_type: QuestionType.SUPPORT,
            email: ''
        };

    const [open, isOpen] = useState<boolean>(false);

    const [currentContact, setCurrentContact] = useState<Contact>(initialContact);

    const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
        toggleDialog();
        props.saveContact(currentContact);
    }

    const handleCheckbox = (event: any) => {

        let checkboxValueToSave: boolean = false;

        if (event.target.checked) {
            checkboxValueToSave = true;
        } else {
            checkboxValueToSave = false;
        }
        updateContactState(event, checkboxValueToSave);
    }

    const updateContactState = (event: any, value: string | boolean | number) => {
        const newCurrentContact = {...currentContact, [event.target.name]: value};
        setCurrentContact(newCurrentContact);
    }

    const handleChange = ( event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        console.log(event);
        let value: string|number|boolean = event.target.value;
        if (event.target.type === 'date') {
            value = new Date(value).getTime();
        }
        updateContactState(event, value);
    }

    const toggleDialog = () => {
        isOpen(!open);
    }

    return (
        <>
            <Button onClick={toggleDialog}>
                {props.contact ? 'Edit' : 'New'}
            </Button>
            <div>
                <Dialog open={open}>
                <Form>
                    <h1>ContactForm</h1>

                    <Tabs defaultActiveKey="1">
                        
                        <TabPane tab="Names" key="1">

                            <label htmlFor="first_name">Firstname</label>
                            <Input onChange={handleChange} type="text" name="first_name" id="first_name" required defaultValue={currentContact.first_name} /><br />

                            <label htmlFor="last_name">Lastname</label>
                            <Input onChange={handleChange} type="text" name="last_name" id="last_name" required defaultValue={currentContact.last_name} /><br />

                        </TabPane>

                        <TabPane tab="Date" key="2">

                            <label htmlFor="insert_date">Insert Date</label>
                            <Input onChange={handleChange} type="date" name="insert_date" id="insert_date" required /><br />

                        </TabPane>

                        <TabPane tab="Properties" key="3">

                            <label htmlFor="comment">Comment</label>
                            <TextArea onChange={handleChange} name="comment" id="comment" required defaultValue={currentContact.comment} autoSize={{ minRows: 2, maxRows: 6 }}/><br />

                            <label htmlFor="want_to_be_contacted">Want to be contacted</label>
                            <Checkbox onChange={handleCheckbox} name="want_to_be_contacted" id="want_to_be_contacted" defaultChecked={currentContact.want_to_be_contacted}>Want to be contacted</Checkbox> <br />

                            <label htmlFor="question_type">Question Type</label>
                            <Select onChange={handleCheckbox} id="question_type" defaultValue={currentContact.question_type}>
                                <option value={QuestionType.SUPPORT}>support</option>
                                <option value={QuestionType.TECHNICAL_QUESTION}>technical question</option>
                            </Select><br />

                            <label htmlFor="email">Email</label>
                            <Input onChange={handleChange} type="email" name="email" id="email" defaultValue={currentContact.email} /><br />

                        </TabPane>

                    </Tabs>

                    <Button type="primary" onClick={handleSubmit}>Save</Button>
                    <Button type="primary" onClick={toggleDialog}>Cancel</Button>
                </Form>
            </Dialog>
            </div>
        </>
    );
}
