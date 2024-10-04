import React from 'react';
import {Button, CommentItem, FieldInput} from "@/components/index.js";
import { comments } from "@/utils/data.js";

const Comments = () => {
    return (
        <div className={'flex flex-col gap-y-5'}>
            <h3 className={'text-lg'}>Обсуждение</h3>
            <div className={'flex flex-col gap-12'}>
                <div className={'w-full flex flex-col items-start'}>
                    <FieldInput placeholder={'Текст комментария'} type={'text'}/>
                    <Button title={'Отправить'} style={'rounded-md'}/>
                </div>
                <div className={'flex flex-col gap-7'}>
                    {comments.map((comment, index) =>
                        <CommentItem key={index} comment={comment}/>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Comments;
