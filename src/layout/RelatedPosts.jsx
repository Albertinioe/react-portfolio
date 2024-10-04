import { RelatedPostItem } from '@/components';
import { relatedPosts } from "@/utils/data.js";

const RelatedPosts = () => {

    return (
        <div className={'flex flex-col gap-y-5'}>
            <h3 className={'text-lg'}>Интересно почитать</h3>
            <div className={'grid grid-cols-1 gap-x-10 gap-y-6 sm:grid-cols-2'}>
                {relatedPosts.map((post, index) =>
                    <RelatedPostItem key={index} post={post} />
                )}
            </div>
        </div>
    );
};

export default RelatedPosts;
