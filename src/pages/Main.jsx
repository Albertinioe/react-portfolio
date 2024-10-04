import { Stories, AddPost, PostList, Pagination } from '@/layout'

const Main = () => {
    return (
        <div className={'flex flex-col gap-8'}>
            <Stories/>
            <AddPost/>
            <PostList/>
            <Pagination/>
        </div>
    );
};

export default Main;
