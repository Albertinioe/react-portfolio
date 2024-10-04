import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import {Aside, Header, Sidebar, Window} from '@/layout'
import {Button, FieldInput} from "@/components/index.js";
import {useSendModal} from "@/providers/SendModalProvider.jsx";

const Wrapper = () => {

    const { isOpen, toggleModal } = useSendModal();


    const fields = [
        {
            placeholder: 'Имя фамилия',
            type: 'text'
        },
        {
            placeholder: 'Ваш e-mail',
            type: 'email'
        },
        {
            placeholder: 'Текстовое сообщение',
            type: 'text'
        }
    ]

    const [fieldsValue, setFieldsValue] = useState(Array.from({length: fields.length}));

    const changeFieldValue = (index, value) => setFieldsValue(prevState => [...prevState, fieldsValue[index] = value]);

    return (
        <>
            <Sidebar/>
            <div className={'flex flex-col w-full h-full overflow-hidden'}>
                <Header/>
                <div className={'w-full h-full bg-secondary-content p-[50px] overflow-y-scroll no-scrollbar'}>
                    <Outlet/>
                </div>
            </div>
            <Aside/>
            <Window isOpen={isOpen} onClose={toggleModal}>
                <div className={'flex flex-col gap-10'}>
                    <div className={'flex flex-col gap-4 w-full items-start'}>
                        {fields.map((field, index) =>
                            <FieldInput
                                type={field.type}
                                key={index}
                                value={fieldsValue[index]}
                                placeholder={field.placeholder}
                                onChange={e => changeFieldValue(index, e.target.value)}
                            />
                        )}
                        <Button title={'Отправить'} style={'rounded-md text-xs'} onClick={toggleModal}/>
                    </div>
                    <div className={'*:text-gray-400 text-xs flex flex-wrap gap-5 w-full justify-center'}>
                        <span>e-mail: <a href="javascript:void(0)" className={'underline'}>info@mywebsite.ru</a></span>
                        <span>тел: <a href="javascript:void(0)" className={'underline'}>+943-232-856-22</a></span>
                    </div>
                </div>
            </Window>
        </>
    );
};

export default Wrapper;
