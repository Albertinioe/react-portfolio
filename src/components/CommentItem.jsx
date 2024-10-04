import React from 'react';
import {Avatar, Link} from "@/components/index.js";

const CommentItem = ({ comment }) => {
    const isAnswerComment = comment.isAnswer ? 'ml-6' : '';
    return (
        <div className={'flex flex-col gap-3 ' + isAnswerComment}>
            <div className={'flex items-center gap-4'}>
                <Avatar image={comment.avatar} size={'sm'} hasBorder={false}/>
                <div className={'flex flex-col'}>
                    <h5 className={'text-xs'}>{comment.name}</h5>
                    <span className={'text-xs text-gray-500 font-light'}>{comment.date}</span>
                </div>
            </div>
            <div className={'flex flex-col gap-3 items-start'}>
                <p className={'text-xs leading-text'}>Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci
                    auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed
                    volutpat massa. Egestas ornare vel volutpat.</p>
                <Link title={'ответить'}/>
            </div>
        </div>
    );
};

export default CommentItem;
