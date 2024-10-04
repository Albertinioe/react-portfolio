import React from 'react';
import CameraIcon from "icon@/CameraIcon.jsx";
import SendIcon from "icon@/SendIcon.jsx";
import FieldAutoHeight from "@/components/FieldAutoHeight.jsx";

const AddPost = () => {
    return (
        <div className={'bg-secondary-header flex items-center px-5 py-4 gap-2 shadow rounded-md'}>
            <FieldAutoHeight placeholder={'Напишите что-нибудь'}/>
            <div className={'flex items-center gap-2'}>
                <button className={'w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full'}>
                    <CameraIcon/>
                </button>
                <button className={'w-10 h-10 bg-blue-800 flex items-center justify-center rounded-full'}>
                    <SendIcon/>
                </button>
            </div>
        </div>
    );
};

export default AddPost;
