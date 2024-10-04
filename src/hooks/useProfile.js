import {useId, useState} from "react";

export const useProfile = () => {
    const fields = [
        {
            placeholder: 'Псевдоним',
            type: 'text',
        },
        {
            placeholder: 'Email',
            type: 'email'
        },
        {
            placeholder: 'О себе',
            type: 'text'
        },
        {
            placeholder: 'Новый пароль',
            type: 'password'
        },
        {
            placeholder: 'Подтвердите пароль',
            type: 'password'
        }
    ]

    const [fieldsValue, setFieldsValue] = useState(Array.from({length: fields.length}));

    const id = useId();

    return {fields, fieldsValue, setFieldsValue, id};
}
