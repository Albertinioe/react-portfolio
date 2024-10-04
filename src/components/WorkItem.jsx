import React from 'react';
import {Button} from "@/components/index.js";

const WorkItem = ({ work }) => {
    return (
        <div className={'max-w-[600px] min-h-[550px] w-full flex sm:flex-row flex-col shadow'}>
            <div className={'sm:w-1/2'}>
                <img className={'h-[250px] sm:h-full w-full object-cover'} src={work.image} alt={work.name} draggable={false}/>
            </div>
            <div className={'bg-secondary sm:w-1/2 p-6 flex flex-col gap-10 justify-between'}>
                <div className={'flex flex-col gap-8'}>
                    <h2 className={'text-2xl'}>{work.name}</h2>
                    <p className={'text-sm font-light leading-text'}>{work.desc}</p>
                    <div className={'flex flex-wrap items-center gap-3'}>
                        {work.tags.map(tag =>
                            <span className={'text-xs py-1 px-3 bg-orange-400 rounded-sm'}>{tag}</span>
                        )}
                    </div>
                </div>
                <div className={'flex justify-end'}>
                    <Button title={'Перейти на сайт'} style={'rounded-md text-xs w-full sm:w-auto'}/>
                </div>
            </div>
        </div>
    );
};

export default WorkItem;
