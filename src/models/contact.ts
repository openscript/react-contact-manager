import { QuestionType } from './questionType';

export interface Contact
{
    id: number,
    first_name: string,
    last_name: string,
    insert_date: number,
    comment: string,
    want_to_be_contacted: boolean,
    question_type: QuestionType,
    email: string
}

