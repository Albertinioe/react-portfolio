import { works } from '@/utils/data.js'
import { WorkItem } from "@/components";

const Work = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <h2 className={'text-xl font-medium'}>Мои работы</h2>

            <div className={'flex flex-col gap-8 items-center justify-center'}>
                {works.map((work, index) =>
                    <WorkItem work={work} key={index} />
                )}
            </div>
        </div>
    );
};

export default Work;
